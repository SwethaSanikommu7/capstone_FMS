package com.user.UserManagementSystem.service;

import com.user.UserManagementSystem.model.PMOUser;
import com.user.UserManagementSystem.model.POCUser;

import reactor.core.publisher.Flux;

public interface UserService {
	public Flux<PMOUser> fetchPMO();
	public Flux<POCUser> fetchPOC();
}
