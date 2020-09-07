package com.fss.simulator.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "VC_terminaldata")
public class VisaTerminalData implements Serializable {

	private static final long serialVersionUID = 1L;
	
	//@Column(name = "TerminalDataId")
	//@GeneratedValue
	//private int TerminalDataId; 
	
	@Id
	@Column(name = "userprofileId",unique = true)
	private int userprofileId;
	
	@Column(name = "SourceID")
	private String sourceID;
	
	@Column(name = "DestinationID")
	private String destinationID;

	@Column(name = "MessageFormat")
	private String MessageFormat;
	
	@Column(name = "PackedInformation")
	private String packedInformation;
	
	@Column(name = "VisaDE18")
	private String VisaDE18;
	
	@Column(name = "VisaDE19")
	private String VisaDE19;
	
	@Column(name = "VisaDE32")
	private String VisaDE32;
	

	@Column(name = "VisaDE33")
	private String VisaDE33;
	
	@Column(name = "VisaDE41")
	private String VisaDE41;
	
	@Column(name = "VisaDE42")
	private String VisaDE42;
	
	@Column(name = "VisaDE43_1")
	private String VisaDE43_1;
	
	@Column(name = "VisaDE43_2")
	private String VisaDE43_2;
	
	@Column(name = "VisaDE43_3")
	private String VisaDE43_3;
	
	@Column(name = "VisaDE43_4")
	private String VisaDE43_4;
	
	@Column(name = "VISADE63_1")
	private String VISADE63_1;
	
	
	@Column(name = "createdBy")
	private String createdBy;
	
	@Temporal(value = TemporalType.DATE)
	@CreationTimestamp
	@Column(name = "INS_DATE")
	private Date insDate;
	
	@Temporal(value = TemporalType.DATE)
	@UpdateTimestamp
	@Column(name = "LAST_UPD_DATE")
	private Date lastUpdDate;
	
}
