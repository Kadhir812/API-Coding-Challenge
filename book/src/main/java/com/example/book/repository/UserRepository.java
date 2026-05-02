package com.example.book.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.book.model.User;

public interface UserRepository extends JpaRepository <User, Long> {
    Optional<User> findByEmail(String email);
}
