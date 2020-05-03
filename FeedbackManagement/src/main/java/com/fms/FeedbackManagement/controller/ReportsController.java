package com.fms.FeedbackManagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fms.FeedbackManagement.model.Reports;
import com.fms.FeedbackManagement.service.ReportService;

import reactor.core.publisher.Flux;

@RestController
public class ReportsController {
	
	@Autowired
	private ReportService reportService;

	@GetMapping("/getReports")
	public Flux<Reports> getReports() {
		return reportService.getReports();
	}
}
