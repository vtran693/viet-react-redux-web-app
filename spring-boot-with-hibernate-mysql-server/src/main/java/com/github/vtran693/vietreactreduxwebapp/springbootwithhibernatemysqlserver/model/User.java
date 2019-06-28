package com.github.vtran693.vietreactreduxwebapp.springbootwithhibernatemysqlserver.model;

public class User {

    private int userId;
    private String username;
    private String firstName;
    private String lastName;

    public User() {}

    public User(int userId, String username, String firstName, String lastName){
        this.userId = userId;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}