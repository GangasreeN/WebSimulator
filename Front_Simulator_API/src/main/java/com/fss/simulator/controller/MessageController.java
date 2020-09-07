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

import com.fss.simulator.entity.Message;
import com.fss.simulator.entity.ResponseDTO;
import com.fss.simulator.service.MessageService;

//@CrossOrigin(origins = "http://localhost:4211")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/message")
public class MessageController {
	@Autowired
	private MessageService service;
	
	@PostMapping("/addMessage")
	public ResponseEntity<ResponseDTO> addMessage( @Valid @RequestBody Message message) 
	{
		//product.setCreatedDateTime(Functions.createdTime1());
		Message message1 = null;
		ResponseDTO response = new ResponseDTO();
		try
		{
			message1=service.saveMessage(message);
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
		
		response.setMessage("MESSAGE is created Successfully");
		response.setStatus(Integer.valueOf(HttpStatus.CREATED.value()));
		response.setPath("/Message/" + message1.getMsgId());
		return new ResponseEntity<>(response, HttpStatus.CREATED);		
	}
	
	@PostMapping("/addMessages")
	public List<Message> addMessages(@RequestBody List<Message> messages)
	{
		
		return service.saveMessages(messages);
	}
	@GetMapping("/Messages")
	public List<Message> findAllMessages()
	{
		return service.getMessages();
	}
	@GetMapping("/MessageById/{id}")
	public Message findMessageById(@PathVariable int id)
	{
		return service.getMessagebyMessageId(id);
	}
	
	@GetMapping("/TemplateMessages")
	public List<Message> findAllTemplateMessages()
	{
		return service.getTemplateMessages();
	}
	@GetMapping("/TemplateBySchemaId/{id}")
	public List<Message> findTemplateBySchemaId(@PathVariable int id)
	{
		return service.getTemplateByScehmaId(id);
	}
	
	@PutMapping("/updateMessage")
	public Message updateMessage(@Valid @RequestBody Message message) 
	{
		return service.updateMessage(message);
	}
	
	
	@DeleteMapping("/deleteMessage/{id}")
	public String deleteMessage(@PathVariable int id)
	{
		return service.deleteMessage(id);
	}
}
