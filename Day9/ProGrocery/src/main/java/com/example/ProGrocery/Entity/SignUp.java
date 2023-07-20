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
	private String Email;
	private String Password;
	private Long ContactNumber;
	
	public String getFirstName() {
		return FirstName;
	}
	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public Long getContactNumber() {
		return ContactNumber;
	}
	public void setContactNumber(Long contactNumber) {
		ContactNumber = contactNumber;
	}
	public SignUp(String lastName, String email, String firstName, String password, Long contactNumber) {
		super();
		LastName = lastName;
		Email = email;
		FirstName = firstName;
		Password = password;
		ContactNumber = contactNumber;
	}
	public SignUp()
	{
		
	}
	
	
	

}
