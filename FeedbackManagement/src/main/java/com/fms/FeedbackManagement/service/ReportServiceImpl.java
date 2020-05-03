package com.fms.FeedbackManagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fms.FeedbackManagement.model.Reports;
import com.fms.FeedbackManagement.repository.ReportsRepo;

import reactor.core.publisher.Flux;


@Service
public class ReportServiceImpl implements ReportService{

	@Autowired
	private ReportsRepo reportRepo;
	
	@Override
	public Flux<Reports> getReports() {
		return reportRepo.findAll();
	}

}
