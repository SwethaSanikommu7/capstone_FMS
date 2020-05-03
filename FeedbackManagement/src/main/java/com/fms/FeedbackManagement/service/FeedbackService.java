package com.fms.FeedbackManagement.service;


import org.springframework.stereotype.Service;

import com.fms.FeedbackManagement.model.Questions;
import com.fms.FeedbackManagement.model.Reports;

import reactor.core.publisher.Flux;

@Service
public interface FeedbackService {
	public Flux<Questions> getAllQuestionList();
	
}
