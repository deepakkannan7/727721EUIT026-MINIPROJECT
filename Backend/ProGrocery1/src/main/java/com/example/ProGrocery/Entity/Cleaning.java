package com.example.ProGrocery.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Cleaning")
public class Cleaning {
	
	@Id
	private int cid;
	private String cname;
	private int cprice;

}
