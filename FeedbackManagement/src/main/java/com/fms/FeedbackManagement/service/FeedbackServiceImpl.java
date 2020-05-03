package com.fms.FeedbackManagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fms.FeedbackManagement.model.Questions;
import com.fms.FeedbackManagement.repository.FeedbackRepo;

import reactor.core.publisher.Flux;

@Service
public class FeedbackServiceImpl implements FeedbackService{

	
	@Autowired
	private FeedbackRepo feedbackRepo;
	
	@Override
	public Flux<Questions> getAllQuestionList() {
		return feedbackRepo.findAll();
	}

}
