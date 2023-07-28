package com.example.ProGrocery.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ProGrocery.Entity.SignUp;

public interface SignRepo extends JpaRepository<SignUp,Integer> {
	
	
	

}
