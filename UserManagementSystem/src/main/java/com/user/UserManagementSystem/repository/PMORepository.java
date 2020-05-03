package com.user.UserManagementSystem.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

import com.user.UserManagementSystem.model.PMOUser;

@Repository
public interface PMORepository extends ReactiveCrudRepository<PMOUser, Long>{

}
