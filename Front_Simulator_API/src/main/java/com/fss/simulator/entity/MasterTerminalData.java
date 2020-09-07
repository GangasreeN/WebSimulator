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
@Table(name = "MC_terminaldata")
public class MasterTerminalData implements Serializable {

	private static final long serialVersionUID = 1L;
	
	//@Column(name = "TerminalDataId")
	//@GeneratedValue
	//private int TerminalDataId; 
	
	@Id
	@Column(name = "userprofileId",unique = true)
	private int userprofileId;

	@Column(name = "MessageFormat")
	private String messageFormat;
	
	@Column(name = "PackedInformation")
	private String packedInformation;
	
	@Column(name = "MasteDE18")
	private String masterDE18;
	
	@Column(name = "MasterDE19")
	private String masterDE19;
	
	@Column(name = "MasterDE32")
	private String masterDE32;
	
	@Column(name = "MasterDE33")
	private String masterDE33;
	
	@Column(name = "MasterDE41")
	private String masterDE41;
	
	@Column(name = "MasterDE42")
	private String masterDE42;
	
	@Column(name = "MasterDE43_1")
	private String masterDE43_1;
	
	@Column(name = "MasterDE43_2")
	private String masterDE43_2;
	
	@Column(name = "MasterDE43_3")
	private String masterDE43_3;
	
	@Column(name = "MasterDE43_4")
	private String masterDE43_4;
	
	@Column(name = "MasterDE63_1")
	private String masterDE63_1;
	
	@Column(name = "MasterDE96")
	private String masterDE96;
	
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
