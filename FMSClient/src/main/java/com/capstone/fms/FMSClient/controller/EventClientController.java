package com.capstone.fms.FMSClient.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import com.capstone.fms.FMSClient.domain.Event;
import com.capstone.fms.FMSClient.domain.PMOUser;
import com.capstone.fms.FMSClient.domain.POCUser;
import com.capstone.fms.FMSClient.domain.Questions;
import com.capstone.fms.FMSClient.domain.Reports;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class EventClientController {
	WebClient webClient = WebClient.create("http://localhost:8086");
	WebClient webClient1 = WebClient.create("http://localhost:8084");
	WebClient webClient3 = WebClient.create("http://localhost:8083");

	@GetMapping("/client/retrieveQuestions")
	@PreAuthorize("hasRole('ADMIN')")
	@CrossOrigin(origins="*")
	public Flux<Questions> getRetrieveQuestionsClient() {
		return webClient.get().uri("/getQuestions").retrieve().bodyToFlux(Questions.class)
				.log("get all questions in client project");
	}
	
	@GetMapping("/client/retrieveReports")
	@PreAuthorize("hasRole('ADMIN')")
	@CrossOrigin(origins="*")
	public Flux<Reports> getRetrieveReportsClient() {
		return webClient.get().uri("/getReports").retrieve().bodyToFlux(Reports.class)
				.log("get all reports in client project");
	}
	
	@GetMapping("/client/retrieveEvents")
	@PreAuthorize("hasRole('PMO') or hasRole('ADMIN') or hasRole('POC')")
	@CrossOrigin(origins="*")
	public Flux<Event> getEventsByUsingRetrieve() {
		return webClient1.get().uri("/getEvents").retrieve().bodyToFlux(Event.class)
				.log("get all events in client project");
	}
	
	@GetMapping("/client/retrieve/{eventId}")
	@PreAuthorize("hasRole('PMO') or hasRole('ADMIN') or hasRole('POC')")
	@CrossOrigin(origins="*")
	public Flux<Event> getSpecificEventByUsingRetrieve(@PathVariable String eventId) {
		//String eventId = eventById;
		return webClient1.get().uri("/retrieveEvents/{eventId}", eventId).retrieve().bodyToFlux(Event.class)
				.log("get specific event in client project");
	}

	
	@GetMapping("/client/sendMail")
	@PreAuthorize("hasRole('ADMIN')")
	@CrossOrigin(origins="*")
	public Mono<String> sendMail() {
		return webClient1.get().uri("/sendEmail").retrieve().bodyToMono(String.class);
	}
	
	@GetMapping("/client/fetchPMO")
	@PreAuthorize("hasRole('PMO') or hasRole('ADMIN')")
	@CrossOrigin(origins="*")
	public Flux<PMOUser> fetchPMO() {
		return webClient3.get().uri("/getPMO").retrieve().bodyToFlux(PMOUser.class)
				.log("get all PMO Users in client project");
	}
	
	@GetMapping("/client/fetchPOC")
	@PreAuthorize("hasRole('PMO') or hasRole('ADMIN') or hasRole('POC')")
	@CrossOrigin(origins="*")
	public Flux<POCUser> fetchPOC() {
		return webClient3.get().uri("/getPOC").retrieve().bodyToFlux(POCUser.class)
				.log("get all POC users in client project");
	}
	
}
