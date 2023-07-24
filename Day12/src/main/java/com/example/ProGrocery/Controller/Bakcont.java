//package com.example.ProGrocery.Controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.ProGrocery.Entity.SignUp;
//import com.example.ProGrocery.Service.Bakserve;
//
//@RestController
//@CrossOrigin
//
//public class Bakcont {
//	
//	
//	@Autowired
//	Bakserve stuService;
//	
//	
//	@PostMapping("/Signadd")
//	public SignUp addInfo(@RequestBody SignUp st) {
//		return stuService.saveDetails(st);
//	}
//	
//	@GetMapping("/Signdetails")
//	public List<SignUp> fetchDetails()
//	{
//		return stuService.getDetails();
//	}
//	
//	@PostMapping("/login")
//	public ResponseEntity<String> loginUser(@RequestBody SignUp loginData)
//	{
//		String email=loginData.getEmail();
//		String password=loginData.getPassword();
//		
//		SignUp user=stuService.findByEmail(email);
//		
//		if(user==null)
//		{
//			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
//		}
//		
//		//check if the password matches
//		if(!user.getPassword().equals(password))
//		{
//			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
//		}
//		
//		//Authentication successful,you can return a success message or user data here
//		return ResponseEntity.ok("Login successful");
//	}
//}
