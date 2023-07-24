package com.example.ProGrocery.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Product")
public class Products {
	
	@Id
	private int pid;
	private String pname;
	private int pprice;
	private String pdescription;
	private String pimagesUrl;
	public Products(int pid, String pname, int pprice, String pdescription) {
		super();
		this.pid = pid;
		this.pname = pname;
		this.pprice = pprice;
		this.pdescription = pdescription;
		
	}
	
	public Products()
	{
		
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public int getPprice() {
		return pprice;
	}
	public void setPprice(int pprice) {
		this.pprice = pprice;
	}
	public String getPdescription() {
		return pdescription;
	}
	public void setPdescription(String pdescription) {
		this.pdescription = pdescription;
	}
	public String getPimagesUrl() {
		return pimagesUrl;
	}
	public void setPimagesUrl(String pimagesUrl) {
		this.pimagesUrl = pimagesUrl;
	}



}
