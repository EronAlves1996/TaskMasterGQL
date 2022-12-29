package io.eronalves1996.server.utils;

import java.io.UnsupportedEncodingException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

@Component
public class JwtUtils {

    @Value("${cookie.jwt.secret}")
    private String COOKIE_SECRET;

    public String verify(String token) throws IllegalArgumentException, UnsupportedEncodingException {
        Algorithm algorithm = Algorithm.HMAC256(COOKIE_SECRET);
        JWTVerifier require = JWT.require(algorithm).build();
        DecodedJWT verify = require.verify(token);
        String payload = verify.getSubject();
        return payload;
    }

    public String sign(String payload) throws IllegalArgumentException, UnsupportedEncodingException {
        System.out.println(COOKIE_SECRET);
        Algorithm algorithm = Algorithm.HMAC256(COOKIE_SECRET);
        return JWT.create().withSubject(payload).sign(algorithm);
    }

}
