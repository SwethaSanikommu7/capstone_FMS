package com.user.UserManagementSystem.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table("poc_users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class POCUser {
	@Id
	private int id;
	private String email_address;
	private String first_name;
	private String last_name;
	private String mobile;
	
	
	public POCUser() {
	}
	
	

	public POCUser(int id, String email_address, String first_name, String last_name, String mobile) {
		super();
		this.id = id;
		this.email_address = email_address;
		this.first_name = first_name;
		this.last_name = last_name;
		this.mobile = mobile;
	}



	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getEmail_address() {
		return email_address;
	}


	public void setEmail_address(String email_address) {
		this.email_address = email_address;
	}


	public String getFirst_name() {
		return first_name;
	}


	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}


	public String getLast_name() {
		return last_name;
	}


	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}


	public String getMobile() {
		return mobile;
	}


	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	
}
