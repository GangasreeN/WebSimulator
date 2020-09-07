package com.fss.simulator.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fss.simulator.entity.Message;

public interface MessageRepository extends JpaRepository<Message,Integer>{
	
	@Query("SELECT m FROM Message m WHERE m.templateInd = 1 ")
	List<Message> findAllTemplate();
	
	@Query("SELECT m FROM Message m WHERE m.schemaID = ?1 and m.templateInd = 1")
	List<Message> findTemplateBySchemaID(int SchemaID);

	@Query("SELECT m FROM Message m WHERE m.msgId IN :messageLinked")
	List<Message> findTransactionMessages(@Param("messageLinked")Integer[] messageLinked);
	

}
