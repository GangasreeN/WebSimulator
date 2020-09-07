package com.fss.simulator.entity;

import java.io.Serializable;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;


import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "card",uniqueConstraints= @UniqueConstraint(columnNames="cardName",name = "UNIQUE_CARD_CARDNAME"))

public class Card  implements Serializable{	

	private static final long serialVersionUID = 1L;

	/*
	 * User for initial value as 1 need to Flush DB data and Restart
	 * 	@SequenceGenerator(initialValue=1, name="address_seq", sequenceName="address_sequence")
	    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="address_seq")
	 * 
	 * 
	 */
	
	
	@Id
	@Column(name = "cardId")
	@GeneratedValue
	private int  cardId;	
		
	@Column(name = "cardName")
	private String cardName;

	@Column(name = "cardNumber")	
	private String cardNumber;

	@Column(name = "expiry_date")
	private String ExpiryDate;

	@Column(name = "pin")
	private String pin;
    
	@Column(name = "newpin")
	private String newpin;
	
	@Column(name = "cvv")
	private String cvv;

	@Column(name = "cvv2")
	private String cvv2;

	@Column(name = "Track1")
	private String Track1;

	@Column(name = "Track2")
	private String Track2;

	@Column(name = "Track3")
	private String Track3;
	
	@Column(name = "DiscretionaryData")
	private String DiscretionaryData;

	@Column(name = "pinBlock")
	private String PinBlock;
	
	@Column(name = "TypeOfCard")
	private String TypeOfCard;

	@Column(name = "EMV_Type")
	private String EMV_Type;

	@Column(name = "createdBy")
	private String createdBy;
	
	@Column(name = "modifyBy")
	private String modifyBy;
     
	//@Column(name = "createdDateTime")
	//private String createdDateTime;
	@Temporal(value = TemporalType.DATE)
	@CreationTimestamp
	@Column(name = "INS_DATE")
	private Date insDate;
	
	//@Column(name = "modifyDateTime")
	//private String modifyDateTime;
	
	@Temporal(value = TemporalType.DATE)
	@UpdateTimestamp
	@Column(name = "LAST_UPD_DATE")
	private Date lastUpdDate;
	
	
	@OneToOne(cascade =  CascadeType.ALL)
    @JoinColumn(name= "EMV_Id",referencedColumnName ="EMV_Id")
    private EMVData emvdata;
	
}
