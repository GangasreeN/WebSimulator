package com.fss.simulator.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fss.simulator.entity.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction,Integer>{

}
