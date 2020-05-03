package com.fms.FeedbackManagement.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

import com.fms.FeedbackManagement.model.Questions;


@Repository
public interface FeedbackRepo extends ReactiveCrudRepository<Questions,Long> {
}
