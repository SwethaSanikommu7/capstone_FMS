package com.fms.EventManagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.fms.EventManagement.model.Event;
import com.fms.EventManagement.service.EventService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class EventsController {

	@Autowired
	private EventService eventService;

	
	@GetMapping("/getEvents")
	@CrossOrigin(origins="*")
	public Flux<Event> getEvents() {
		return eventService.getAllEventList();
	}

	@GetMapping("/retrieveEvents/{eventId}")
	@CrossOrigin(origins="*")
	public Flux<Event> getEventsById(@PathVariable String eventId) {
		return eventService.searchEventsById(eventId);
	}
	
	@GetMapping("/getEventsById/{id}")
	public Mono<Event> getEventsById(@PathVariable int id) {
		return eventService.findEventById(id);
	}

	@GetMapping("/getEventsByVh/{vh}")
	public Flux<Event> getEventsByVolunteerHours(@PathVariable int vh) {
		return eventService.searchEventsByVH(vh);
	}

	@GetMapping("/sendEmail")
	@CrossOrigin(origins="*")
	public Mono<String> sendEmail() {
		return eventService.SendMail();
	}
}
