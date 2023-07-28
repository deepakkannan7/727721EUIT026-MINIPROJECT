package com.example.ProGrocery.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name="Sign")
public class SignUp {
	
	@Id
	private String FirstName;
	private String LastName;
	private String email;
	private String password;
	private Long ContactNumber;
	

	
	
	

}
