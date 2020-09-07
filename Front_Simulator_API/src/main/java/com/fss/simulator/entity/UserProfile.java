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
@Table(name = "userprofile",
   uniqueConstraints= @UniqueConstraint(columnNames= {"userName","EmailId","EmpId"},
                                              name = "UNIQUE_USER_USERNAME_EMAILID_EMPID"))
public class UserProfile implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id  
	@Column(name = "UserProfileId")
	@GeneratedValue
	private int UserProfileId; 

	@Column(name = "userName")
	private String userName;
	
	@Column(name = "EmpId")
	private Integer EmpId;
	
	@Column(name = "EmailId")
	private String EmailId;
	
	@Column(name = "Role")
	private String Role;
	
	@Column(name = "UserType")
	private String UserType;
	
	@Column(name = "Status")
	private String Status;
	
	@Column(name = "Password")
	private String Password;
	
	@Column(name = "TimeZone")
	private String TimeZone;
	
	@Temporal(value = TemporalType.DATE)
	@CreationTimestamp
	@Column(name = "INS_DATE")
	private Date insDate;
	
	@Temporal(value = TemporalType.DATE)
	@UpdateTimestamp
	@Column(name = "LAST_UPD_DATE")
	private Date lastUpdDate;
	
	@Column(name = "createdBy")
	private String createdBy;
	
	@Column(name = "NoOfAttempts")
	private Integer NoOfAttempts;
}
