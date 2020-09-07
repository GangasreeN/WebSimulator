package com.fss.simulator.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.fss.simulator.entity.Schema;
import com.fss.simulator.repository.SchemaRepository;

@Service
public class SchemaService {
	@Autowired
	private SchemaRepository repository;	
	
	public Schema saveSchema(Schema schema)  {
		return repository.save(schema);
	}
	public List<Schema> saveSchemas(List<Schema> schemas) {
		return repository.saveAll(schemas);
	}
	public List<Schema> getSchemas() {
		return repository.findAll();
	}
	
	public List<Schema> getSchemasWithoutTemplate() {
		return repository.findAllSchema();
	}
	
	public Schema getSchemabySchemaId(int schemaID) {
		Schema transaction = repository.findById(schemaID).orElse(null);	
		return transaction;
	}
	
	public String deleteSchema(int id) {
		repository.deleteById(id);
		return "Transaction removed " + id;
	}
	
	public Schema updateSchema(Schema schemaID) {
		Schema existingSchema = repository.findById(schemaID.getSchemaId()).orElse(null);

		existingSchema.setSchemaName(schemaID.getSchemaName());
		
		return repository.save(existingSchema);
		
	}
}
