package io.eronalves1996.server.components;

import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.security.NoSuchAlgorithmException;
import java.time.Duration;
import java.util.Base64;
import java.util.Base64.Decoder;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import io.eronalves1996.server.model.User;
import io.eronalves1996.server.service.UserService;
import io.eronalves1996.server.utils.JwtUtils;

@RestController
public class UserRESTController {

    @Value("${cookie.name}")
    private String COOKIE_NAME;
    private JwtUtils jwt;
    private UserService service;

    public UserRESTController(JwtUtils jwt, UserService service) {
        this.jwt = jwt;
        this.service = service;
    }

    @PostMapping("/login")
    public ResponseEntity<User> makeLogin(@RequestHeader("Authorization") String authorization)
            throws IllegalArgumentException, UnsupportedEncodingException, NoSuchAlgorithmException {
        Decoder decoder = Base64.getDecoder();
        byte[] decoded = decoder.decode(authorization);
        String emailAndPassword = new String(decoded, StandardCharsets.UTF_8);
        String[] splitted = emailAndPassword.split(":");
        User user = service.getUserByEmailAndPassword(splitted[0], splitted[1]);
        ResponseCookie cookie = ResponseCookie.from(COOKIE_NAME, jwt.sign(user.getId())).httpOnly(true)
                .maxAge(Duration.ofDays(7)).build();
        BodyBuilder response = ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString());
        return response.body(user);
    }
}
