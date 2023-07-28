package com.example.ProGrocery.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ProGrocery.Entity.Products;
import com.example.ProGrocery.Repository.ProRepo;

@Service
public class Proserve {
	
	@Autowired
	ProRepo prepo;
	
	public Products saveDetails(Products e)
	{
		return prepo.save(e);
		}
	
	public List<Products> getDetails()
	{
		return prepo.findAll();
	}
	
	public Products updateDetails(int pid,Products s)
	{
		Products modelx=prepo.findById(pid).orElse(null);
		if(modelx !=null)
		{
			modelx.setPname(s.getPname());
			modelx.setPprice(s.getPprice());
			modelx.setPdescription(s.getPdescription());
			return prepo.saveAndFlush(modelx);
		}
		else
		{
			return null;
		}
	}
	public void deleteDetails1(int pid)
	{
		prepo.deleteById(pid);
	}
	
	public Products updateImageUrl(int pid,String pimagesUrl)
	{
		Products modelx=prepo.findById(pid).orElse(null);
		if(modelx !=null && pimagesUrl!=null)
		{
			modelx.setPimagesUrl(pimagesUrl);
			return prepo.saveAndFlush(modelx);
		}
		else
		{
			return null;
		}
	}

}
