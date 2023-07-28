package com.example.ProGrocery.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="Fruits")
public class Fruits {
	
	@Id
	private int fid;
	private String fname;
	private int fprice;



}
