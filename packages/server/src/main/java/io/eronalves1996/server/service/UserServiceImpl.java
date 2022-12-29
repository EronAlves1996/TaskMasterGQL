package io.eronalves1996.server.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import io.eronalves1996.server.model.User;
import io.eronalves1996.server.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository repository;

    public UserServiceImpl(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public User getUserById(String id) {
        Optional<User> query = repository.findById(id);
        if (query.isPresent())
            return query.get();
        throw new RuntimeException("User not finded");
    }

    @Override
    public User createUser(User user) {
        return repository.save(user);
    }

}