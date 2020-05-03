package com.capstone.fms.FMSClient.jwt.service;


import java.util.Arrays;


import org.springframework.stereotype.Service;

import com.capstone.fms.FMSClient.jwt.Model.Role;
import com.capstone.fms.FMSClient.jwt.Model.User;

import reactor.core.publisher.Mono;

@Service
public class UserService {
	//cBrlgyL2GI2GINuLUUwgojITuIufFycpLG4490dhGtY=
	private final String pocUsername = "Deepika";// password: poc
	private final User poc = new User(pocUsername, "INTm9CmXGIGFMzkHD7hAEdOT6nwK5uAIGaY2Nvk8NTg=", true, Arrays.asList(Role.ROLE_POC));
	
	private final String pmoUsername = "Shiva";// password: pmo
	private final User pmo = new User(pmoUsername, "cD+jFAFQRSY78YPvjL1H1ANM89elUUgbk/Oj49ld7pA=", true, Arrays.asList(Role.ROLE_PMO));
	
	private final String pmoUsername2 = "Anil";// password: pmo
	private final User pmo1 = new User(pmoUsername2, "gc1MPw51F6ODDN85da0AZI4Mjp5mS0HcvDT7rqzAzA4=", true, Arrays.asList(Role.ROLE_PMO));
	
	//username:passwowrd -> pmo:pmo
	/*private final String pomUsername = "pmo";// password: pmo
	private final User pmo = new User(pomUsername, "S3ReJy0odJ/k1Kh7JYY/cPplbH+Gls/Y5BbO5fwGDE0=", true, Arrays.asList(Role.ROLE_PMO));
	*/
	////username:passwowrd -> poc:poc
	/*private final String pocUsername = "poc";// password: poc
	private final User poc = new User(pocUsername, "kXfZwSmUmW1Hh5Nf8vksyzkh/0J6UJoqWPUg/8ugg7Q=", true, Arrays.asList(Role.ROLE_POC));
	*/
	
	//username:passwowrd -> admin:admin
	private final String adminUsername = "admin";// password: admin
	private final User admin = new User(adminUsername, "dQNjUIMorJb8Ubj2+wVGYp6eAeYkdekqAcnYp+aRq5w=", true, Arrays.asList(Role.ROLE_ADMIN));
	
	public Mono<User> findByUsername(String username) {
		if (username.equals(pmoUsername)) {
			return Mono.just(pmo);
		}else if (username.equals(pmoUsername2)) {
			return Mono.just(pmo1);
		}else if (username.equals(pocUsername)) {
			return Mono.just(poc);
		} 
		else if (username.equals(adminUsername)) {
			return Mono.just(admin);
		} else {
			return Mono.empty();
		}
	}
	
}
