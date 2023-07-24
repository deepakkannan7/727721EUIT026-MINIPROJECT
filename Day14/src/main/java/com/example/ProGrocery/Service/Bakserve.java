//package com.example.ProGrocery.Service;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.ProGrocery.Entity.SignUp;
//import com.example.ProGrocery.Repository.SignRepo;
//
//@Service
//public class Bakserve {
//
//	@Autowired
//	
//	SignRepo stRepo;
//	public SignUp saveDetails(SignUp e) {
//		return stRepo.save(e);
//	}
//	
//	public List<SignUp> getDetails()
//	{
//		return stRepo.findAll();
//	}
//	
//	public SignUp findByEmail(String email)
//	{
//		return stRepo.findByEmail(email);
//	}
//}
