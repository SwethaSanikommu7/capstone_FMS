package com.user.UserManagementSystem.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

import com.user.UserManagementSystem.model.POCUser;

@Repository
public interface POCRepository extends ReactiveCrudRepository<POCUser, Long>{
}
