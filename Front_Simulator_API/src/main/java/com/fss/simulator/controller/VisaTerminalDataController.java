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



import com.fss.simulator.entity.VisaTerminalData;
import com.fss.simulator.entity.ResponseDTO;
import  com.fss.simulator.service.VisaTerminalDataService;
//@CrossOrigin(origins = "http://localhost:4211")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/visa")
public class VisaTerminalDataController {
	@Autowired
private VisaTerminalDataService service;
	
	@PostMapping("/addTerminalData")
	public ResponseEntity<ResponseDTO> addCard( @Valid @RequestBody VisaTerminalData terminaldata) throws ParseException
	{
     
		VisaTerminalData terminaldata1=service.saveTerminalData(terminaldata);
		ResponseDTO response = new ResponseDTO();
		response.setMessage("TerminalData is created Successfully");
		response.setStatus(Integer.valueOf(HttpStatus.CREATED.value()));
		response.setPath("/TerminalData/" + terminaldata1.getUserprofileId());
		//response.setCardID(terminaldata1.getTerminalDataId());
		return new ResponseEntity<>(response, HttpStatus.CREATED);		
	}
	
	
	@PostMapping("/addTerminalDatas")
	public List<VisaTerminalData> addCards(@RequestBody List<VisaTerminalData> terminaldatas)
	{		
		return service.saveVisaTerminalDatas(terminaldatas);
		
	}
	@GetMapping("/TerminalDatas")
	public List<VisaTerminalData> findAllTerminalDatas()
	{
		return service.getVisaTerminalDatas();
	}

	@GetMapping("/TerminalDataByUserId/{id}")
	public VisaTerminalData findTerminalDataById(@PathVariable int id)
	{
		return service.getVisaTerminlDatabyUserProfileId(id);
	}

	
	@PutMapping("/updateTerminalData")
	public  ResponseEntity<ResponseDTO> updateTerminalData(@Valid @RequestBody VisaTerminalData terminaldata) throws ParseException
	{
		VisaTerminalData terminaldata1= service.updateTerminalData(terminaldata);
		ResponseDTO response = new ResponseDTO();
		response.setMessage("TerminalData is updated Successfully");
		response.setStatus(Integer.valueOf(HttpStatus.CREATED.value()));
		response.setPath("/TerminalData/" + terminaldata1.getUserprofileId());
		//response.setCardID(terminaldata1.getTerminalDataId());
		return new ResponseEntity<>(response, HttpStatus.CREATED);	
		
	}
	@DeleteMapping("/deleteTerminalData/{id}")
	public String deleteTerminalData(@PathVariable int id)
	{
		return service.deleteTerminalData(id);
	}
}
