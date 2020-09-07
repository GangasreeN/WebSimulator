package com.fss.simulator.controller;

import java.text.ParseException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
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

import com.fss.simulator.entity.Connection;
import com.fss.simulator.entity.ResponseDTO;
import com.fss.simulator.entity.UserProfile;
import com.fss.simulator.service.ConnectionService;

//@CrossOrigin(origins = "http://localhost:4211")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/connection")
public class ConnectionController {
	@Autowired
	private ConnectionService service;
	
	@PostMapping("/addConnection")
	public ResponseEntity<ResponseDTO> addConnection( @Valid @RequestBody Connection connection) throws ParseException
	{
		//product.setCreatedDateTime(Functions.createdTime1());
		Connection connection1 = null;
		ResponseDTO response = new ResponseDTO();
		try
		{
			connection1=service.saveConnection(connection);
		}
		catch(DataIntegrityViolationException d)
		{
			if(d.getMostSpecificCause().getMessage().contains("UNIQUE_CONNECTION_CONNECTIONNAME"))
				response.setMessage("CONNECTION NAME should be unique");
			else
			   response.setMessage(d.getMostSpecificCause().getMessage());
			   response.setError(HttpStatus.BAD_REQUEST.getReasonPhrase());
			response.setStatus(Integer.valueOf(HttpStatus.BAD_REQUEST.value()));
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);		
		}
		
		response.setMessage("Connection is created Successfully");
		response.setStatus(Integer.valueOf(HttpStatus.CREATED.value()));
		response.setPath("/Connection/" + connection1.getConnectionId());
		return new ResponseEntity<>(response, HttpStatus.CREATED);		
	}
	
	@PostMapping("/addConnections")
	public List<Connection> addConnections(@RequestBody List<Connection> connections)
	{
		
		return service.saveConnections(connections);
	}
	@GetMapping("/connections")
	public List<Connection> findAllConnections()
	{
		return service.getConnections();
	}
	@GetMapping("/ConnectionById/{id}")
	public Connection findConnectionById(@PathVariable int id)
	{
		return service.getConnectionbyConnectionId(id);
	}
	@GetMapping("/connectionname/{name}")
	public Connection findConnectionByName(@PathVariable String name)
	{
		return service.getConnectionbyConnectionsName(name);
	}
	@GetMapping("/createdby/{createdby}")
	public Connection findConnectionByCreatedBy(@PathVariable String createdby)
	{
		return service.getByCreatedBy(createdby);
	}
	@PutMapping("/updateConnection")
	public Connection updateConnection(@Valid @RequestBody Connection connection) throws ParseException
	{
		return service.updateConnection(connection);
	}
	
	/*
	 * @PutMapping("/update/card/EMVData") public Connection
	 * updateCardEMVData(@Valid @RequestBody Connection connection) throws
	 * ParseException { return service.updateCardEMVData(connection); }
	 */
	@DeleteMapping("/deleteConnection/{id}")
	public String deleteConnection(@PathVariable int id)
	{
		return service.deleteConnection(id);
	}
}
