package com.example.ProGrocery.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProGrocery.Entity.Food;

@Repository
public interface FoodRepo extends JpaRepository<Food,Integer>{

}
