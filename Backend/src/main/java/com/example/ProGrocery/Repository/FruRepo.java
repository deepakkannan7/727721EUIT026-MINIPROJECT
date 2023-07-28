package com.example.ProGrocery.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProGrocery.Entity.Fruits;

@Repository
public interface FruRepo extends JpaRepository<Fruits,Integer> {

}
