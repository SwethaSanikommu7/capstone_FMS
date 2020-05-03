package com.capstone.fms.FMSClient.domain;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reports {
	
	private int id;
	private String event_id;
	private String base_location;
	private String council_name;
	private String project;
	private String business_unit;
	private int rating;
	private String employee_id;
	private String employee_name;
	private String status;
	
	
	public Reports() {
	}


	public Reports(int id, String event_id, String base_location, String council_name, String project,
			String business_unit, int rating, String employee_id, String employee_name, String status) {
		super();
		this.id = id;
		this.event_id = event_id;
		this.base_location = base_location;
		this.council_name = council_name;
		this.project = project;
		this.business_unit = business_unit;
		this.rating = rating;
		this.employee_id = employee_id;
		this.employee_name = employee_name;
		this.status = status;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getEvent_id() {
		return event_id;
	}


	public void setEvent_id(String event_id) {
		this.event_id = event_id;
	}


	public String getBase_location() {
		return base_location;
	}


	public void setBase_location(String base_location) {
		this.base_location = base_location;
	}


	public String getCouncil_name() {
		return council_name;
	}


	public void setCouncil_name(String council_name) {
		this.council_name = council_name;
	}


	public String getProject() {
		return project;
	}


	public void setProject(String project) {
		this.project = project;
	}


	public String getBusiness_unit() {
		return business_unit;
	}


	public void setBusiness_unit(String business_unit) {
		this.business_unit = business_unit;
	}


	public int getRating() {
		return rating;
	}


	public void setRating(int rating) {
		this.rating = rating;
	}


	public String getEmployee_id() {
		return employee_id;
	}


	public void setEmployee_id(String employee_id) {
		this.employee_id = employee_id;
	}


	public String getEmployee_name() {
		return employee_name;
	}


	public void setEmployee_name(String employee_name) {
		this.employee_name = employee_name;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}

}