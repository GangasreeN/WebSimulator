package com.fss.simulator.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.fss.simulator.entity.Connection;

public interface ConnectionRepository extends JpaRepository<Connection,Integer>{

	
	Connection findByCreatedBy(String CreatedName );
	Connection findByConnectionName(String name);

}
