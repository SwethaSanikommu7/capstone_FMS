package com.fms.FeedbackManagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fms.FeedbackManagement.model.Questions;
import com.fms.FeedbackManagement.model.Reports;
import com.fms.FeedbackManagement.service.FeedbackService;
import com.fms.FeedbackManagement.service.ReportService;

import reactor.core.publisher.Flux;

@RestController
public class FeedbackController {

	@Autowired
	private FeedbackService feedbackService;
	
	@GetMapping("/getQuestions")
	@CrossOrigin(origins="*")
	public Flux<Questions> getQuestions() {
		return feedbackService.getAllQuestionList();
	}
	
}
