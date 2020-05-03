package com.fms.EventManagement.service;

import com.fms.EventManagement.model.Event;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface EventService {
	
	public Flux<Event> getAllEventList();

	public Flux<Event> searchEventsById(String eventId);

	public Flux<Event> searchEventsByVH(int volunteerHours);
	
	public Mono<Event>  findEventById(int id);
	
	public Mono<String> SendMail();
}
