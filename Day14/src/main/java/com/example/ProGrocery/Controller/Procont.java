package com.example.ProGrocery.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProGrocery.Entity.Products;
import com.example.ProGrocery.Service.Proserve;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/user")
public class Procont {
	
	@Autowired(required=true)
	Proserve eser;
	
	@PostMapping("/addpro")
	public Products addDetails(@RequestBody Products e)
	{
		return eser.saveDetails(e);
	}
	
	@GetMapping("/showpro")
	public List<Products> fetchDetails()
	{
		return eser.getDetails();
	}
	
	@PutMapping("/updatingpro/{pid}")
	public Products updateInfo(@PathVariable int pid,@RequestBody Products s)
	{
		return eser.updateDetails(pid,s);
	}
	
	@DeleteMapping("/deletePro/{pid}")
	public String deleteInfo1(@PathVariable("pid") int pid)
	{
		eser.deleteDetails1(pid);
		return "Details Deleted Successfully";
	}
	
	
      @PostMapping("/updateImageUrl/{pid}")
      public Products updateImagesUrl(@PathVariable int pid,@RequestParam("imageUrl") String pimagesUrl)
      {
    	  Products model=eser.updateImageUrl(pid,pimagesUrl);
    	  return model;
    	  
      }
}
