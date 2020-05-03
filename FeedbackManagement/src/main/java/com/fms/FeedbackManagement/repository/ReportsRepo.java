package com.fms.FeedbackManagement.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

import com.fms.FeedbackManagement.model.Reports;

@Repository
public interface ReportsRepo extends ReactiveCrudRepository<Reports, Long>{

}
