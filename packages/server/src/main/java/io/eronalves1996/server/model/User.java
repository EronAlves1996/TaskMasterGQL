package io.eronalves1996.server.model;

import org.springframework.data.mongodb.core.mapping.Document;

import io.leangen.graphql.annotations.GraphQLNonNull;
import nonapi.io.github.classgraph.json.Id;

@Document
public class User {

    @Id
    private String id;
    @GraphQLNonNull
    private String name;
    @GraphQLNonNull
    private String email;
    @GraphQLNonNull
    private String password;

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
