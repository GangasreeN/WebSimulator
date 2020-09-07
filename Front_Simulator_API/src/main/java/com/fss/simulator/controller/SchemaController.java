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

import com.fss.simulator.entity.Schema;
import com.fss.simulator.entity.ResponseDTO;
import com.fss.simulator.service.SchemaService;

//@CrossOrigin(origins = "http://localhost:4211")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/Schema")
public class SchemaController {
	@Autowired
	private SchemaService service;
	
	@PostMapping("/addSchema")
	public ResponseEntity<ResponseDTO> addSchema( @Valid @RequestBody Schema schema) 
	{
		//product.setCreatedDateTime(Functions.createdTime1());
		Schema schema1 = null;
		ResponseDTO response = new ResponseDTO();
		try
		{
			schema1=service.saveSchema(schema);
		}
		catch(DataIntegrityViolationException d)
		{
			if(d.getMostSpecificCause().getMessage().contains("UNIQUE_MESSAGE_MESSAGENAME"))
				response.setMessage("MESSAGE NAME should be unique");
			else
			   response.setMessage(d.getMostSpecificCause().getMessage());
			   response.setError(HttpStatus.BAD_REQUEST.getReasonPhrase());
			response.setStatus(Integer.valueOf(HttpStatus.BAD_REQUEST.value()));
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);		
		}
		
		response.setMessage("Schema is created Successfully");
		response.setStatus(Integer.valueOf(HttpStatus.CREATED.value()));
		response.setPath("/Schema/" + schema1.getSchemaId());
		return new ResponseEntity<>(response, HttpStatus.CREATED);		
	}
	
	@PostMapping("/addSchemas")
	public List<Schema> addSchemas(@RequestBody List<Schema> schemas)
	{
		
		return service.saveSchemas(schemas);
	}
	@GetMapping("/Schemas")
	public List<Schema> findAllSchemas()
	{
		return service.getSchemas();
	}
	
	@GetMapping("/SchemasWithoutTemplate")
	public List<Schema> findAllSchemasWithoutTemplate()
	{
		return service.getSchemasWithoutTemplate();
	}
	@GetMapping("/SchemaById/{id}")
	public Schema findSchemaById(@PathVariable int id)
	{
		return service.getSchemabySchemaId(id);
	}
	
	@PutMapping("/updateSchema")
	public Schema updateSchema(@Valid @RequestBody Schema schema) 
	{
		return service.updateSchema(schema);
	}
	
	
	@DeleteMapping("/deleteSchema/{id}")
	public String deleteSchema(@PathVariable int id)
	{
		return service.deleteSchema(id);
	}
}
