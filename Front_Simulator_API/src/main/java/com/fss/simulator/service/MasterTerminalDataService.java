package com.fss.simulator.service;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fss.simulator.exception.CardNotFoundException;
import com.fss.simulator.entity.MasterTerminalData;
import com.fss.simulator.repository.MasterTerminalDataRepository;


@Service
public class MasterTerminalDataService {
	@Autowired
	private  MasterTerminalDataRepository repository;
	
	
	public  MasterTerminalData saveMasterTerminalData( MasterTerminalData masterterminaldata)
	{
		
		return repository.save(masterterminaldata);
	}

	public void DefaultMasterTerminalDataAdd(int id) {
		  MasterTerminalData masterterminaldata = new MasterTerminalData();
		 		 
		  masterterminaldata.setUserprofileId(id);
		  masterterminaldata.setMasterDE18("1519");
		 
		  masterterminaldata.setMasterDE19("356");
		  masterterminaldata.setMasterDE32("12345678911");
		  masterterminaldata.setMasterDE33("12345678911");
		  masterterminaldata.setMasterDE41("TERMID01");
		  masterterminaldata.setMasterDE42("CARDACCEPTOR001");
		  masterterminaldata.setMasterDE43_1("US BANK TEXAS");
		  masterterminaldata.setMasterDE43_2("CHENNAI");
		  masterterminaldata.setMasterDE43_3("TN");
		  masterterminaldata.setMasterDE43_4("IN");
		  masterterminaldata.setMasterDE63_1("0002");
		  masterterminaldata.setMasterDE96("12345678");
		  masterterminaldata.setMessageFormat("BINARY");
		  masterterminaldata.setPackedInformation("Packed");
		  repository.save(masterterminaldata);
	 }
	
	public List<MasterTerminalData> saveMasterTerminalDatas(List<MasterTerminalData> masterterminaldatas)
	{
		return repository.saveAll(masterterminaldatas);
	}
	public List<MasterTerminalData> getMasterTerminalDatas()
	{
		return repository.findAll();
	}
	public MasterTerminalData getMasterTerminlDatabyUserProfileId(int userid)
	{
		return repository.findById(userid).orElseThrow(() -> new CardNotFoundException("Terminal Not Found with id "+ userid));
	}

	public String deleteMasterTerminalData(int id)
	{
		repository.deleteById(id);
		return "Master TerminalData removed" + id;
	}
	public MasterTerminalData updateTerminalData(MasterTerminalData masterterminaldata) throws ParseException
	{
		MasterTerminalData existingMasterTerminalData= repository.findById(masterterminaldata.getUserprofileId()).orElse(null);	
		existingMasterTerminalData.setMasterDE18(masterterminaldata.getMasterDE18());
		existingMasterTerminalData.setMasterDE19(masterterminaldata.getMasterDE19());
		existingMasterTerminalData.setMasterDE32(masterterminaldata.getMasterDE32());
		existingMasterTerminalData.setMasterDE33(masterterminaldata.getMasterDE33());
		existingMasterTerminalData.setMasterDE41(masterterminaldata.getMasterDE41());
		existingMasterTerminalData.setMasterDE42(masterterminaldata.getMasterDE42());
		existingMasterTerminalData.setMasterDE43_1(masterterminaldata.getMasterDE43_1());
		existingMasterTerminalData.setMasterDE43_2(masterterminaldata.getMasterDE43_2());
		existingMasterTerminalData.setMasterDE43_3(masterterminaldata.getMasterDE43_3());
		existingMasterTerminalData.setMasterDE43_4(masterterminaldata.getMasterDE43_4());
		existingMasterTerminalData.setMasterDE63_1(masterterminaldata.getMasterDE63_1());
		existingMasterTerminalData.setMasterDE96(masterterminaldata.getMasterDE96());
		existingMasterTerminalData.setMessageFormat(masterterminaldata.getMessageFormat());
		existingMasterTerminalData.setPackedInformation(masterterminaldata.getPackedInformation());
	
		 
		return repository.save(existingMasterTerminalData);
	}
	/*
	 * public Card updateCardEMVData(Card card) throws ParseException { Card
	 * existingCard= repository.findById(card.getCardId()).orElse(null);
	 * existingCard.setEmvdata(card.getEmvdata()); return
	 * repository.save(existingCard); }
	 */
}
