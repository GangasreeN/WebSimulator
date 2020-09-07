package com.fss.simulator.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

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
@Table(name = "emvdata")
public class EMVData implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id  
	@Column(name = "EMV_Id")
	@GeneratedValue
	private int EMV_Id; 

	//@OneToOne(mappedBy = "emvdata")
	//@JoinColumn(name= "cardId")
	//private Card card;
	
	@Column(name = "cardId")
	private int  cardId;
	
	@Column(name = "EMVDataKey1")
	private String EMVDataKey1;
	
	@Column(name = "EMVDataKey2")
	private String EMVDataKey2;
	
	@Column(name = "EMVDataKey3")
	private String EMVDataKey3;
	
	
	@Column(name = "EMVFormat")
	private String EMVFromat;
	
	@Column(name = "Tag5A")
	private String Tag5A;

	@Column(name = "Tag50")
	private String Tag50;

	@Column(name = "Tag54")
	private String Tag54;

	@Column(name = "Tag57")
	private String Tag57;

	@Column(name = "Tag5F2A")
	private String Tag5F2A;

	@Column(name = "Tag5F3A")
	private String Tag5F3A;

	@Column(name = "Tag5F24")
	private String Tag5F24;

	@Column(name = "Tag5F34")
	private String Tag5F34;

	@Column(name = "Tag5F36")
	private String Tag5F36;

	@Column(name = "Tag71")
	private String Tag71;

	@Column(name = "Tag72")
	private String Tag72;

	@Column(name = "Tag81")
	private String Tag82;

	@Column(name = "Tag84")
	private String Tag84;

	@Column(name = "Tag8A")
	private String Tag8A;

	@Column(name = "Tag91")
	private String Tag91;

	@Column(name = "Tag94")
	private String Tag94;

	@Column(name = "Tag95")
	private String Tag95;

	@Column(name = "Tag96")
	private String Tag96;

	@Column(name = "Tag98")
	private String Tag98;

	@Column(name = "Tag9A")
	private String Tag9A;

	@Column(name = "Tag9B")
	private String Tag9B;

	@Column(name = "Tag9C")
	private String Tag9C;

	@Column(name = "Tag9F02")
	private String Tag9F02;

	@Column(name = "Tag9F03")
	private String Tag9F03;

	@Column(name = "Tag9F06")
	private String Tag9F06;

	@Column(name = "Tag9F10")
	private String Tag9F10;

	@Column(name = "Tag9F1A")
	private String Tag9F1A;

	@Column(name = "Tag9F26")
	private String Tag9F26;

	@Column(name = "Tag9F27")
	private String Tag9F27;

	@Column(name = "Tag9F33")
	private String Tag9F33;

	@Column(name = "Tag9F34")
	private String Tag9F34;

	@Column(name = "Tag9F35")
	private String Tag9F35;

	@Column(name = "Tag9F36")
	private String Tag9F36;

	@Column(name = "Tag9F37")
	private String Tag9F37;

	@Column(name = "Tag9F5B")
	private String Tag9F5B;

	@Column(name = "Tag9F6E")
	private String Tag9F6E;

	@Column(name = "Tag9F7C")
	private String Tag9F7C;

	@Column(name = "Tag9FC0")
	private String Tag9FC0;

}
