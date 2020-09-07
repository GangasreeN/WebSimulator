package com.fss.simulator.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fss.simulator.entity.MasterTerminalData;


public interface MasterTerminalDataRepository extends JpaRepository<MasterTerminalData,Integer>{



}
