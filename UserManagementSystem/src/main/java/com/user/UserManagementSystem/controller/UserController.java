package com.user.UserManagementSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.user.UserManagementSystem.model.PMOUser;
import com.user.UserManagementSystem.model.POCUser;
import com.user.UserManagementSystem.service.UserService;

import reactor.core.publisher.Flux;

@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/getPMO")
	public Flux<PMOUser> getPMOUsers() {
		return userService.fetchPMO();
	}
	
	@GetMapping("/getPOC")
	public Flux<POCUser> getPOCUsers() {
		return userService.fetchPOC();
	}
}
