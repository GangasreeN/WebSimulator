package com.fss.simulator.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fss.simulator.entity.Message;
import com.fss.simulator.entity.Transaction;
import com.fss.simulator.repository.MessageRepository;
import com.fss.simulator.repository.TransactionRepository;

@Service
public class TransactionService {
	@Autowired
	private TransactionRepository repository;	
	
	@Autowired
	private MessageRepository Messagerepository;	
	
	public Transaction saveTransaction(Transaction transaction)  {
		return repository.save(transaction);
	}
	public List<Transaction> saveTransactions(List<Transaction> transactions) {
		return repository.saveAll(transactions);
	}
	public List<Transaction> getTransactions() {
		return repository.findAll();
	}
	public Transaction getTransactionbyTransactionId(int transactionID) {
		Transaction transaction = repository.findById(transactionID).orElse(null);	
		return transaction;
	}
	
	public String deleteTransaction(int id) {
		repository.deleteById(id);
		return "Transaction removed " + id;
	}
	
	public Transaction updateTransaction(Transaction transaction) {
		Transaction existingTransaction = repository.findById(transaction.getTransID()).orElse(null);

		existingTransaction.setTransName(transaction.getTransName());
		existingTransaction.setMsgOB(transaction.getMsgOB());
		existingTransaction.setMsgIB(transaction.getMsgIB());
		existingTransaction.setSchemaID(transaction.getSchemaID());
		existingTransaction.setMsgReqID(transaction.getMsgReqID());
		return repository.save(existingTransaction);
		
	}
	public List<Message> getMessageInsideTransactions(Integer[] messageLinked) {
		
		return Messagerepository.findTransactionMessages(messageLinked);
	}
}
