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

import com.fss.simulator.entity.Transaction;
import com.fss.simulator.entity.Message;
import com.fss.simulator.entity.ResponseDTO;
import com.fss.simulator.entity.UserProfile;
import com.fss.simulator.service.TransactionService;

//@CrossOrigin(origins = "http://localhost:4211")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/transaction")
public class TransactionController {
	@Autowired
	private TransactionService service;
	
	@PostMapping("/addTransaction")
	public ResponseEntity<ResponseDTO> addTransaction( @Valid @RequestBody Transaction transaction) 
	{
		//product.setCreatedDateTime(Functions.createdTime1());
		Transaction transaction1 = null;
		ResponseDTO response = new ResponseDTO();
		try
		{
			transaction1=service.saveTransaction(transaction);
		}
		catch(DataIntegrityViolationException d)
		{
			if(d.getMostSpecificCause().getMessage().contains("UNIQUE_TRANSACTION_TRANSACTIONNAME"))
				response.setMessage("TRANSACTION NAME should be unique");
			else
			   response.setMessage(d.getMostSpecificCause().getMessage());
			   response.setError(HttpStatus.BAD_REQUEST.getReasonPhrase());
			response.setStatus(Integer.valueOf(HttpStatus.BAD_REQUEST.value()));
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);		
		}
		
		response.setMessage("Trasnaction is created Successfully");
		response.setStatus(Integer.valueOf(HttpStatus.CREATED.value()));
		response.setPath("/Transaction/" + transaction1.getTransID());
		return new ResponseEntity<>(response, HttpStatus.CREATED);		
	}
	
	@PostMapping("/addTransactions")
	public List<Transaction> addTransactions(@RequestBody List<Transaction> transactions)
	{
		
		return service.saveTransactions(transactions);
	}
	@GetMapping("/Transactions")
	public List<Transaction> findAllTransactions()
	{
		return service.getTransactions();
	}
	@GetMapping("/TransactionById/{id}")
	public Transaction findTransactionById(@PathVariable int id)
	{
		return service.getTransactionbyTransactionId(id);
	}
	
	@PutMapping("/updateTransaction")
	public Transaction updateTransaction(@Valid @RequestBody Transaction transaction) 
	{
		return service.updateTransaction(transaction);
	}
	
	
	@DeleteMapping("/deleteTransaction/{id}")
	public String deleteTransaction(@PathVariable int id)
	{
		return service.deleteTransaction(id);
	}
	@GetMapping("/TransactionWithMessage/{id}")
	public List<Message> findMessageInsdieTransactions(@PathVariable int id)
	{
		Transaction transaction =service.getTransactionbyTransactionId(id);
		Integer[] messageLinked = transaction.getMsgReqID();
		return service.getMessageInsideTransactions(messageLinked);
	}
	
	
	
}
