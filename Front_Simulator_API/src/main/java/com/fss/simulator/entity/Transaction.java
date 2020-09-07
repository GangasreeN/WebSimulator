package com.fss.simulator.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

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
@Table(name = "transaction")

public class Transaction implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "TransID")
	@GeneratedValue
	private int TransID;	
	
	@Column(name = "SchemaID")	
	private int SchemaID;
	
	@Column(name = "MsgIB")	
	private String  MsgIB;
	
	@Column(name = "MsgOB")	
	private String MsgOB;
	
	@Column(name = "TransName")
	private String TransName;
	
	@Column(name = "createdBy")
	private String createdBy;
	
	@Column(name = "msgReq")	
	private String[] msgReq;
	
	@Column(name = "msgReqID")	
	private Integer[] msgReqID;
	
	@Column(name = "modifyBy")
	private String modifyBy;
	
	@Temporal(value = TemporalType.DATE)
	@CreationTimestamp
	@Column(name = "createdDateTime")
	private Date createdDateTime;
	
	@Temporal(value = TemporalType.DATE)
	@UpdateTimestamp
	@Column(name = "ModifyDate")
	private Date ModifyDate;

}
