package com.fss.simulator.service;


import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.fss.simulator.exception.APIException;
import com.fss.simulator.exception.CardNotFoundException;
import com.fss.simulator.entity.Card;
import com.fss.simulator.entity.EMVData;
import com.fss.simulator.repository.CardRepository;
import com.fss.simulator.util.TripleDes;

@Service
public class CardService {
	@Autowired
	private CardRepository repository;

	@Value("${app.MasterKey}")
	private String masterKey;

	public Card saveCard(Card card) throws Exception {

		/*
		 * List<Card> result; List<Card> list = getCards(); result = list.stream().
		 * filter(existingCard ->
		 * existingCard.getCardName().equalsIgnoreCase(card.getCardName())).collect(
		 * Collectors.toList()); if(result.isEmpty() == false) { throw new
		 * APIException("Duplicate card "); }
		 * 
		 * 
		 * System.out.print("duplicate card name");
		 */
		/*
		 * card.setCardNumber(TripleDes.encrypt(card.getCardNumber(), masterKey));
		 * card.setTrack1(TripleDes.encrypt(card.getTrack1(), masterKey));
		 * card.setTrack2(TripleDes.encrypt(card.getTrack2(), masterKey));
		 * card.setTrack3(TripleDes.encrypt(card.getTrack3(), masterKey));
		 * card.setPin(TripleDes.encrypt(card.getPin(), masterKey));
		 * card.setCvv(TripleDes.encrypt(card.getCvv(), masterKey));
		 * card.setCvv2(TripleDes.encrypt(card.getCvv2(), masterKey));
		 * card.setExpiryDate(TripleDes.encrypt(card.getExpiryDate(), masterKey));
		 */

		return repository.save(card);
	}

	public List<Card> saveCards(List<Card> cards) {

		return repository.saveAll(cards);

	}

	public List<Card> getCards() {
		return repository.findAll();
	}

	public Card getCardbyCardId(int cardid) throws Exception {
		Card card = repository.findById(cardid)
				.orElseThrow(() -> new CardNotFoundException("Card Not Found with id " + cardid));
		
		/*
		 * card.setCardNumber(TripleDes.decrypt(card.getCardNumber(), masterKey));
		 * card.setTrack1(TripleDes.decrypt(card.getTrack1(), masterKey));
		 * card.setTrack2(TripleDes.decrypt(card.getTrack2(), masterKey));
		 * card.setTrack3(TripleDes.decrypt(card.getTrack3(), masterKey));
		 * card.setPin(TripleDes.decrypt(card.getPin(), masterKey));
		 * card.setCvv(TripleDes.decrypt(card.getCvv(), masterKey));
		 * card.setCvv2(TripleDes.decrypt(card.getCvv2(), masterKey));
		 * card.setExpiryDate(TripleDes.decrypt(card.getExpiryDate(), masterKey));
		 */
		return card;
	}

	public Card getCardbyName(String name) throws Exception {
		Card card = repository.findByCardName(name);
		/*
		 * card.setCardNumber(TripleDes.decrypt(card.getCardNumber(), masterKey));
		 * 
		 * card.setTrack1(TripleDes.decrypt(card.getTrack1(), masterKey));
		 * 
		 * card.setTrack2(TripleDes.decrypt(card.getTrack2(), masterKey));
		 * card.setTrack3(TripleDes.decrypt(card.getTrack3(), masterKey));
		 * card.setPin(TripleDes.decrypt(card.getPin(), masterKey));
		 * card.setCvv(TripleDes.decrypt(card.getCvv(), masterKey));
		 * card.setCvv2(TripleDes.decrypt(card.getCvv2(), masterKey));
		 * card.setExpiryDate(TripleDes.decrypt(card.getExpiryDate(), masterKey));
		 */
		return card;
	}

	public Card getByCreatedBy(String createdName) throws Exception {
		Card card =  repository.findByCreatedBy(createdName);
		/*
		 * card.setCardNumber(TripleDes.decrypt(card.getCardNumber(), masterKey));
		 * 
		 * card.setTrack1(TripleDes.decrypt(card.getTrack1(), masterKey));
		 * 
		 * card.setTrack2(TripleDes.decrypt(card.getTrack2(), masterKey));
		 * card.setTrack3(TripleDes.decrypt(card.getTrack3(), masterKey));
		 * card.setPin(TripleDes.decrypt(card.getPin(), masterKey));
		 * card.setCvv(TripleDes.decrypt(card.getCvv(), masterKey));
		 * card.setCvv2(TripleDes.decrypt(card.getCvv2(), masterKey));
		 * card.setExpiryDate(TripleDes.decrypt(card.getExpiryDate(), masterKey));
		 */
		return card;
	}

	public String deleteCard(int id) {
		repository.deleteById(id);
		return "card removed " + id;
	}

	public Card updateCard(Card card) {
		Card existingCard = repository.findById(card.getCardId()).orElse(null);

		existingCard.setCardName(card.getCardName());
		existingCard.setCardNumber(card.getCardNumber());
		existingCard.setExpiryDate(card.getExpiryDate());
		existingCard.setPin(card.getPin());
		existingCard.setCvv(card.getCvv());
		existingCard.setCvv2(card.getCvv2());
		existingCard.setTrack1(card.getTrack1());
		existingCard.setTrack2(card.getTrack2());
		existingCard.setTypeOfCard(card.getTypeOfCard());
		existingCard.setEMV_Type(card.getEMV_Type());
		existingCard.setCreatedBy(card.getCreatedBy());
		existingCard.setEmvdata(card.getEmvdata());
		existingCard.setPinBlock(card.getPinBlock());

		return repository.save(existingCard);
	}

	public Card updateCardEMVData(@Valid EMVData emvdata) {
		Card existingCard = repository.findById(emvdata.getCardId()).orElse(null);
		existingCard.setEmvdata(emvdata);
		existingCard.setEMV_Type("YES");
		return repository.save(existingCard);
	}
}
