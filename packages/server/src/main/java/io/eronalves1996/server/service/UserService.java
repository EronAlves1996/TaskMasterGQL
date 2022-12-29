package io.eronalves1996.server.service;

import io.eronalves1996.server.model.User;

public interface UserService {

    User getUserById(String id);

    User createUser(User user);
}
