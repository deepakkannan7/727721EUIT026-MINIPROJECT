package com.example.ProGrocery.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProGrocery.Entity.SignUp;
import com.example.ProGrocery.Service.Proserve;

@RestController
@CrossOrigin

public class Procont {
	
	
	@Autowired
	Proserve stuService;
	
	
	@PostMapping("/Signadd")
	public SignUp addInfo(@RequestBody SignUp st) {
		return stuService.saveDetails(st);
	}
	
	@GetMapping("/Signdetails")
	public List<SignUp> fetchDetails()
	{
		return stuService.getDetails();
	}
	
	
	
	
	
	
	
	
	
	

}
