package io.eronalves1996.server.components;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.web.context.request.ServletWebRequest;

import io.eronalves1996.server.model.User;
import io.eronalves1996.server.service.UserService;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.annotations.GraphQLRootContext;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import io.leangen.graphql.spqr.spring.autoconfigure.DefaultGlobalContext;

@GraphQLApi
@Component
public class UserComponent {

    private UserService service;

    public UserComponent(UserService service) {
        this.service = service;
    }

    @GraphQLQuery
    public User getUserById(@GraphQLRootContext DefaultGlobalContext<ServletWebRequest> context, String id) {
        Object userId = context.getExtension("userId");
        return this.service.getUserById((String) userId, id);
    }

    @GraphQLQuery
    public List<User> getAllUsers(@GraphQLRootContext DefaultGlobalContext<ServletWebRequest> context) {
        Object userId = context.getExtension("userId");
        return this.service.getAllUsers((String) userId);
    }

    @GraphQLMutation
    public User createUser(User user) {
        return service.createUser(user);
    }
}
