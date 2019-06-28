package com.github.vtran693.vietreactreduxwebapp.springbootwithhibernatemysqlserver.controller;

import com.github.vtran693.vietreactreduxwebapp.springbootwithhibernatemysqlserver.model.User;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/users")
public class UserController{

    @GetMapping("")
    public List<User> getAllUsers(){
        List<User> allUsers = new ArrayList<>();
        allUsers.add( new User(1, "vtran693", "Viet", "Tran") );
        allUsers.add( new User(2, "cmavram", "Chandrika", "Mavram") );
        allUsers.add( new User(3, "pnarayanan", "Priyanga", "Narayanan") );
        allUsers.add( new User(4, "rsharmila", "Ravi", "Sharmila") );
        return allUsers;
    }

    @GetMapping("/{userId}")
    public User getUserById(@PathVariable(value="userId") String userId){

        int userIdInteger = Integer.parseInt(userId);

        switch (userIdInteger){
            case 1:
                return new User(1, "vtran693", "Viet", "Tran");
            case 2:
                return new User(2, "cmavram", "Chandrika", "Mavram");
            case 3:
                return new User(3, "pnarayanan", "Priyanga", "Narayanan");
            case 4:
                return new User(4, "rsharmila", "Ravi", "Sharmila");
            default:
                return new User(0, "userone", "User", "One");
        }
    }
}