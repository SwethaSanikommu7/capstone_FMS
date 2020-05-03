package com.user.UserManagementSystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.UserManagementSystem.model.PMOUser;
import com.user.UserManagementSystem.model.POCUser;
import com.user.UserManagementSystem.repository.PMORepository;
import com.user.UserManagementSystem.repository.POCRepository;

import reactor.core.publisher.Flux;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private PMORepository pmoRepo;
	
	@Autowired
	private POCRepository pocRepo;
	
	@Override
	public Flux<PMOUser> fetchPMO() {
		return pmoRepo.findAll();
	}

	@Override
	public Flux<POCUser> fetchPOC() {
		return pocRepo.findAll();
	}
	
}
