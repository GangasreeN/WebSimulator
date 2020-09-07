package com.fss.simulator.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.fss.simulator.entity.Schema;

public interface SchemaRepository extends JpaRepository<Schema,Integer>{

	@Query("SELECT s FROM Schema s")
	List<Schema> findAllSchema();
}
