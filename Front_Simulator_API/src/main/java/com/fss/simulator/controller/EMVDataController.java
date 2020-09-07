package com.fss.simulator.controller;

import java.text.ParseException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.fss.simulator.entity.EMVData;

import com.fss.simulator.service.EMVDataService;
//@CrossOrigin(origins = "http://localhost:4211")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class EMVDataController {
	@Autowired
private EMVDataService service;
	
	@PostMapping("/addEMVData")
	public EMVData addEMVData( @Valid @RequestBody EMVData emvdata) throws ParseException
	{	
		return service.saveEMVData(emvdata);	
	}
	@GetMapping("/emvdata") 
	public List<EMVData> findAllCards() {
		return service.getAllEMVData(); 
		}
	@GetMapping("/EMVDataByCardId/{id}") 
	public EMVData findProductById(@PathVariable int id)
	{ 
		return service.getEMVDatabyCardId(id);
		}
	
	/*
	 * @PostMapping("/addCards") public List<Card> addCards(@RequestBody List<Card>
	 * cards) {
	 * 
	 * return service.saveCards(cards); }
	 * 
	 * @GetMapping("/cards") public List<Card> findAllCards() { return
	 * service.getCards(); }
	 * 
	 * @GetMapping("/cardById/{id}") public Card findProductById(@PathVariable int
	 * id) { return service.getCardbyCardId(id); }
	 * 
	 * @GetMapping("/cardname/{name}") public Card findProductByName(@PathVariable
	 * String name) { return service.getCardbyName(name); }
	 * 
	 * @GetMapping("/createdby/{createdby}") public Card
	 * findProductByCreatedBy(@PathVariable String createdby) { return
	 * service.getByCreatedBy(createdby); }
	 * 
	 * @PutMapping("/update") public Card updateCard(@Valid @RequestBody Card card)
	 * throws ParseException { return service.updateCard(card); }
	 * 
	 * @DeleteMapping("/delete/{id}") public String deleteCard(@PathVariable int id)
	 * { return service.deleteCard(id); }
	 */
}
