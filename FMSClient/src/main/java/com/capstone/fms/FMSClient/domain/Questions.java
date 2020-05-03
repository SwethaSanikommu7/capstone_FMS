package com.capstone.fms.FMSClient.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Questions {
	
	private int id;
	private String question;
	private String total_answers;
	private String feedback_type;
	
	public Questions() {
	}
	public Questions(int id, String question, String total_answers, String feedback_type) {
		super();
		this.id = id;
		this.question = question;
		this.total_answers = total_answers;
		this.feedback_type = feedback_type;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getTotal_answers() {
		return total_answers;
	}
	public void setTotal_answers(String total_answers) {
		this.total_answers = total_answers;
	}
	public String getFeedback_type() {
		return feedback_type;
	}
	public void setFeedback_type(String feedback_type) {
		this.feedback_type = feedback_type;
	}
}
