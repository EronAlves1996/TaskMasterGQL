package io.eronalves1996.server.components;

import java.util.List;

import org.springframework.stereotype.Component;

import io.eronalves1996.server.model.User;
import io.eronalves1996.server.service.UserService;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;

@GraphQLApi
@Component
public class UserComponent {

    private UserService service;

    public UserComponent(UserService service) {
        this.service = service;
    }

    @GraphQLQuery
    public User getUserById(String id) {
        return this.service.getUserById(id);
    }

    @GraphQLQuery
    public List<User> getAllUsers() {
        return this.service.getAllUsers();
    }

    @GraphQLMutation
    public User createUser(User user) {
        return service.createUser(user);
    }
}
