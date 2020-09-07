package com.fss.simulator.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.fss.simulator.entity.Card;

public interface CardRepository extends JpaRepository<Card,Integer>{

	Card findByCardName(String CardIdName);
	Card findByCreatedBy(String CreatedName );

}
