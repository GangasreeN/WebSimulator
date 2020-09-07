package com.fss.simulator.controller;

import java.text.ParseException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
import org.springframework.web.bind.annotation.RestController;

import com.fss.simulator.entity.Card;
import com.fss.simulator.entity.EMVData;
import com.fss.simulator.entity.ResponseDTO;
import com.fss.simulator.service.CardService;
import com.fss.simulator.util.TripleDes;

import io.swagger.annotations.Api;

//@CrossOrigin(origins = "http://localhost:4211")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@Api(value = "blockLists")
public class CardController {
	@Autowired
	private CardService service;

	@Value("${app.MasterKey}")
	private String masterKey;

	@PostMapping("/addCard")
	public ResponseEntity<ResponseDTO> addCard(@Valid @RequestBody Card card) throws NumberFormatException, Exception {

		ResponseDTO response = new ResponseDTO();
		Card card1 = null;
		try {
			card1 = service.saveCard(card);
		} catch (DataIntegrityViolationException d) {
			if (d.getMostSpecificCause().getMessage().contains("UNIQUE_CARD_CARDNAME")) {
				response.setStatus(Integer.valueOf(HttpStatus.BAD_REQUEST.value()));
				response.setMessage("CARD NAME should be unique");
			} else {
				response.setMessage(d.getMostSpecificCause().getMessage());
			}
			response.setError(HttpStatus.BAD_REQUEST.getReasonPhrase());
			response.setStatus(Integer.valueOf(HttpStatus.BAD_REQUEST.value()));
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
		}

		response.setData(card1.getCardId());
		response.setMessage("Card is created Successfully");
		response.setStatus(Integer.valueOf(HttpStatus.CREATED.value()));
		response.setPath("/card/" + card1.getCardId());
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	@PostMapping("/addCards")
	public List<Card> addCards(@RequestBody List<Card> cards) {

		return service.saveCards(cards);

	}

	@GetMapping("/cards")
	public List<Card> findAllCards() {
		return service.getCards();
	}

	@GetMapping("/cardById/{id}")
	public Card findCardById(@PathVariable int id) throws Exception {
		Card card = service.getCardbyCardId(id);

		return card;
	}

	@GetMapping("/cardname/{name}")
	public Card findCardtByName(@PathVariable String name) throws Exception {
		Card card = service.getCardbyName(name);
		return card;
	}

	@GetMapping("/createdby/{createdby}")
	public Card findCardtByCreatedBy(@PathVariable String createdby) throws Exception {
		Card card = service.getByCreatedBy(createdby);
	
		return card;
	}

	@PutMapping("/update")
	public Card updateCard(@Valid @RequestBody Card card) throws ParseException {
		return service.updateCard(card);
	}

	@PutMapping("/update/card/EMVData")
	public ResponseEntity<ResponseDTO> updateCardEMVData(@Valid @RequestBody EMVData emvdata) {
		ResponseDTO response = new ResponseDTO();
		Card emvdata1 = service.updateCardEMVData(emvdata);
		response.setData(emvdata1.getCardId());
		response.setMessage("Updated is EMVData Successfully");
		response.setStatus(Integer.valueOf(HttpStatus.CREATED.value()));
		response.setPath("/card/" + emvdata1.getCardId());
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	@PostMapping("/card/EMVData")
	public ResponseEntity<ResponseDTO> AddCardEMVData(@Valid @RequestBody EMVData emvdata) {
		ResponseDTO response = new ResponseDTO();
		Card emvdata1 = service.updateCardEMVData(emvdata);
		response.setData(emvdata1.getCardId());
		response.setMessage("Updated is EMVData Successfully");
		response.setStatus(Integer.valueOf(HttpStatus.CREATED.value()));
		response.setPath("/EMVDATA/" + emvdata1.getCardId());
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	@DeleteMapping("/delete/{id}")
	public String deleteCard(@PathVariable int id) {
		return service.deleteCard(id);
	}
}
