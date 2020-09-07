package com.fss.simulator.controller;

import java.text.ParseException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import com.fss.simulator.entity.MasterTerminalData;
import com.fss.simulator.entity.ResponseDTO;
import com.fss.simulator.service.MasterTerminalDataService;

//@CrossOrigin(origins = "http://localhost:4211")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/master")
public class MasterTerminalDataController {
	@Autowired
private MasterTerminalDataService service;
	
	@PostMapping("/addMasterTerminalData")
	public ResponseEntity<ResponseDTO> addCard( @Valid @RequestBody MasterTerminalData masterterminaldata) throws ParseException
	{
     
		MasterTerminalData masterterminaldata1=service.saveMasterTerminalData(masterterminaldata);
		ResponseDTO response = new ResponseDTO();
		response.setMessage("TerminalData is created Successfully");
		response.setStatus(Integer.valueOf(HttpStatus.CREATED.value()));
		response.setPath("/TerminalData/" + masterterminaldata1.getUserprofileId());
		//response.setCardID(terminaldata1.getTerminalDataId());
		return new ResponseEntity<>(response, HttpStatus.CREATED);		
	}
	
	
	@PostMapping("/addMasterTerminalDatas")
	public List<MasterTerminalData> addMasterTerminalDatas(@RequestBody List<MasterTerminalData> masterterminaldatas)
	{		
		return service.saveMasterTerminalDatas(masterterminaldatas);
		
	}
	@GetMapping("/TerminalDatas")
	public List<MasterTerminalData> findAllMasterTerminalDatas()
	{
		return service.getMasterTerminalDatas();
	}

	@GetMapping("/TerminalDataByUserId/{id}")
	public MasterTerminalData findMasterTerminalDataById(@PathVariable int id)
	{
		return service.getMasterTerminlDatabyUserProfileId(id);
	}

	
	@PutMapping("/updateTerminalData")
	public  ResponseEntity<ResponseDTO> updateMasterTerminalData(@Valid @RequestBody MasterTerminalData masterterminaldata) throws ParseException
	{
		MasterTerminalData terminaldata1= service.updateTerminalData(masterterminaldata);
		ResponseDTO response = new ResponseDTO();
		response.setMessage("TerminalData is updated Successfully");
		response.setStatus(Integer.valueOf(HttpStatus.CREATED.value()));
		response.setPath("/TerminalData/" + terminaldata1.getUserprofileId());
		//response.setCardID(terminaldata1.getTerminalDataId());
		return new ResponseEntity<>(response, HttpStatus.CREATED);	
		
	}
	@DeleteMapping("/deleteTerminalData/{id}")
	public String deleteMasterTerminalData(@PathVariable int id)
	{
		return service.deleteMasterTerminalData(id);
	}
}
