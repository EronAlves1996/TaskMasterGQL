package io.eronalves1996.server.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import io.eronalves1996.server.model.User;

public interface UserRepository extends MongoRepository<User, String> {

}
