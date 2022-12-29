package io.eronalves1996.server.service;

import java.security.NoSuchAlgorithmException;
import java.util.List;

import io.eronalves1996.server.model.User;

public interface UserService {

    User getUserById(String userId, String id);

    User createUser(User user);

    User getUserByEmailAndPassword(String email, String password) throws NoSuchAlgorithmException;

    List<User> getAllUsers(String userId);

}
