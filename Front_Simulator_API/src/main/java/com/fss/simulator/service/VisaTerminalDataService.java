package com.fss.simulator.service;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fss.simulator.exception.CardNotFoundException;
import com.fss.simulator.entity.VisaTerminalData;
import com.fss.simulator.repository.VisaTerminalDataRepository;

@Service
public class VisaTerminalDataService {
	@Autowired
	private VisaTerminalDataRepository repository;
	
	
	public VisaTerminalData saveTerminalData(VisaTerminalData visaterminaldata)
	{
		
		return repository.save(visaterminaldata);
	}

	public void DefaultVisaTerminalDataAdd(int id) {
		  VisaTerminalData visaterminaldata = new VisaTerminalData();
		 		 
		  visaterminaldata.setUserprofileId(id);
		  visaterminaldata.setVisaDE18("1519");
		 
		  visaterminaldata.setVisaDE19("356");
		  visaterminaldata.setVisaDE32("12345678911");
		  visaterminaldata.setVisaDE33("12345678911");
		  visaterminaldata.setVisaDE41("TERMID01");
		  visaterminaldata.setVisaDE42("CARDACCEPTOR001");
		  visaterminaldata.setVisaDE43_1("US BANK TEXAS");
		  visaterminaldata.setVisaDE43_2("CHENNAI");
		  visaterminaldata.setVisaDE43_3("TN");
		  visaterminaldata.setVisaDE43_4("IN");
		  visaterminaldata.setVISADE63_1("0002");
		 
		  visaterminaldata.setDestinationID("VISA DESTINATION");
		  visaterminaldata.setSourceID("VISA SOURCEID");
		  visaterminaldata.setMessageFormat("BINARY");
		  visaterminaldata.setPackedInformation("Packed");
		  repository.save(visaterminaldata);
	 }
	
	public List<VisaTerminalData> saveVisaTerminalDatas(List<VisaTerminalData> visaterminaldatas)
	{
		return repository.saveAll(visaterminaldatas);
	}
	public List<VisaTerminalData> getVisaTerminalDatas()
	{
		return repository.findAll();
	}
	public VisaTerminalData getVisaTerminlDatabyUserProfileId(int userid)
	{
		return repository.findById(userid).orElseThrow(() -> new CardNotFoundException("VISA Terminal Not Found with id "+ userid));
	}

	public String deleteTerminalData(int id)
	{
		repository.deleteById(id);
		return "TerminalData removed" + id;
	}
	public VisaTerminalData updateTerminalData(VisaTerminalData visaterminaldata) throws ParseException
	{
		VisaTerminalData existingVisaTerminalData= repository.findById(visaterminaldata.getUserprofileId()).orElse(null);
		
		existingVisaTerminalData.setVisaDE18(visaterminaldata.getVisaDE18());
		existingVisaTerminalData.setVisaDE19(visaterminaldata.getVisaDE19());
		existingVisaTerminalData.setVisaDE32(visaterminaldata.getVisaDE32());
		existingVisaTerminalData.setVisaDE33(visaterminaldata.getVisaDE33());
		existingVisaTerminalData.setVisaDE41(visaterminaldata.getVisaDE41());
		existingVisaTerminalData.setVisaDE42(visaterminaldata.getVisaDE42());
		existingVisaTerminalData.setVisaDE43_1(visaterminaldata.getVisaDE43_1());
		existingVisaTerminalData.setVisaDE43_2(visaterminaldata.getVisaDE43_2());
		existingVisaTerminalData.setVisaDE43_3(visaterminaldata.getVisaDE43_3());
		existingVisaTerminalData.setVisaDE43_4(visaterminaldata.getVisaDE43_4());
		existingVisaTerminalData.setVISADE63_1(visaterminaldata.getVISADE63_1());
		existingVisaTerminalData.setSourceID(visaterminaldata.getSourceID());
		existingVisaTerminalData.setDestinationID(visaterminaldata.getDestinationID());
		existingVisaTerminalData.setMessageFormat(visaterminaldata.getMessageFormat());
		existingVisaTerminalData.setPackedInformation(visaterminaldata.getPackedInformation());
		//existingCard.setModifyDateTime(Functions.createdTime1();
		
		return repository.save(existingVisaTerminalData);
	}
	/*
	 * public Card updateCardEMVData(Card card) throws ParseException { Card
	 * existingCard= repository.findById(card.getCardId()).orElse(null);
	 * existingCard.setEmvdata(card.getEmvdata()); return
	 * repository.save(existingCard); }
	 */
}
