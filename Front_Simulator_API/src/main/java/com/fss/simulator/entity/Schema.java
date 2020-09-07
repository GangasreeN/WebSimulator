package com.fss.simulator.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import javax.persistence.Table;
import javax.persistence.TableGenerator;
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
@Table(name = "TransSchema")
public class Schema implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@TableGenerator(name = "Schema_Gen",initialValue = 1)
	@Column(name = "SchemaId")
	@GeneratedValue(strategy = GenerationType.TABLE,generator = "Schema_Gen")
	private int  SchemaId;	
	
	@Column(name = "SchemaName")
	private String SchemaName;
	
	@Column(name = "createdBy")
	private String createdBy;
	
	@Column(name = "modifyBy")
	private String modifyBy;
	
	@Temporal(value = TemporalType.DATE)
	@CreationTimestamp
	@Column(name = "createdDate")
	private Date createdDate;
	
	@Temporal(value = TemporalType.DATE)
	@UpdateTimestamp
	@Column(name = "modifyDate")
	private Date modifyDate;
	
	@OneToMany(cascade =  CascadeType.ALL)
    @JoinColumn(name= "SchemaID",referencedColumnName ="SchemaID")
    private Set<Transaction> transaction;
	
	@OneToMany(cascade =  CascadeType.ALL)
    @JoinColumn(name= "SchemaID",referencedColumnName ="SchemaID")
    private Set<Message> message;

}
