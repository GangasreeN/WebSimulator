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
@Table(name = "Connections",uniqueConstraints= @UniqueConstraint(columnNames="connectionName",name = "UNIQUE_CONNECTION_CONNECTIONNAME"))
public class Connection implements Serializable {
	
	private static final long serialVersionUID = 1L;
	@Id  
	@Column(name = "ConnectionId")
	@GeneratedValue
	private int ConnectionId; 

	
	@Column(name = "connectionName")
	private String connectionName;
	
	@Column(name = "IP")
	private String IP;
	
	@Column(name = "PORT")
	private String PORT;
	
	@Column(name = "NetworkType")
	private String NetworkType;
	
	@Column(name = "SystemIP")
	private String SystemIP;
	
	@Column(name = "ServerIP")
	private String ServerIP;
	
	@Column(name = "SystemPort")
	private String SystemPort;
	
	@Column(name = "ServerPort")
	private String ServerPort;
	
	@Column(name = "KeyVarient")
	private String KeyVarient;
		
	@Column(name = "OutBoundKey1")
	private String OutBoundKey1;
	
	@Column(name = "OutBoundKey2")
	private String OutBoundKey2;
	
	@Column(name = "OutBoundKey3")
	private String OutBoundKey3;
	
	
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
