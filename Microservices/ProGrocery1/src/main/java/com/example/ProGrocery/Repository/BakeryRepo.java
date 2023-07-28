package com.example.ProGrocery.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProGrocery.Entity.Bakery;

@Repository

public interface BakeryRepo extends JpaRepository<Bakery,Integer>{

}
