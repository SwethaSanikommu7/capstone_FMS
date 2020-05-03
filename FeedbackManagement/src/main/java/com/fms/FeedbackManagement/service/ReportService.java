package com.fms.FeedbackManagement.service;

import org.springframework.stereotype.Service;

import com.fms.FeedbackManagement.model.Reports;

import reactor.core.publisher.Flux;

@Service
public interface ReportService {
	 Flux<Reports> getReports();

}
