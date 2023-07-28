package com.example.ProGrocery.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProGrocery.Entity.Cleaning;

@Repository
public interface CleanRepo extends JpaRepository<Cleaning,Integer> {

}
