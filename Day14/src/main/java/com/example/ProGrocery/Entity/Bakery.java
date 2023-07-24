package com.example.ProGrocery.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="Bakery")
public class Bakery {
	
	@Id
	private int bid;
	private String bname;
	private int bprice;
    


}
