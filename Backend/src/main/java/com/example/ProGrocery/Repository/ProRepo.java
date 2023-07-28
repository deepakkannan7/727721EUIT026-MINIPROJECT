package com.example.ProGrocery.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProGrocery.Entity.Products;

@Repository
public interface ProRepo extends JpaRepository<Products,Integer>{

}
