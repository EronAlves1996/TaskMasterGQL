package io.eronalves1996.server.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.eronalves1996.server.model.User;
import io.eronalves1996.server.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private UserRepository repository;

    public UserServiceImpl(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public User createUser(User user) {
        return repository.save(user);
    }

    @Override
    public User getUserById(String userId, String id) {
        verifyUserRequesting(userId);
        Optional<User> query = repository.findById(id);
        if (query.isPresent())
            return query.get();
        throw new RuntimeException("User not finded");
    }

    @Override
    public List<User> getAllUsers(String userId) {
        verifyUserRequesting(userId);
        return repository.findAll();
    }

    private void verifyUserRequesting(String userId) {
        Optional<User> requestedBy = repository.findById(userId);
        if (requestedBy.isEmpty())
            throw new RuntimeException("Forbidden");
    }

}
