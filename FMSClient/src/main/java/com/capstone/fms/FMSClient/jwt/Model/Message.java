package com.capstone.fms.FMSClient.jwt.Model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data @NoArgsConstructor @AllArgsConstructor @ToString
public class Message {
	
	private String content;
	public Message(String content) {
		this.content=content;
	}

}
