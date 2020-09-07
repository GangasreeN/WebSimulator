package com.fss.simulator.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fss.simulator.entity.Card;
import com.fss.simulator.entity.EMVData;
import com.fss.simulator.repository.EMVDataRepository;

@Service
public class EMVDataService {
	
	@Autowired
	private EMVDataRepository repository;
	
	public EMVData saveEMVData( EMVData emvdata) {
		return repository.save(emvdata);		
	}
	
	public List<EMVData> getAllEMVData()
	{
		return repository.findAll();
	}
	public EMVData getEMVDatabyCardId(int userId)
	{
		return repository.findByCardId(userId);
	}
}
