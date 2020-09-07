package com.fss.simulator.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Service
public class ChangePassword  implements Serializable{	

	private static final long serialVersionUID = 1L;
	
	private int UserProfileId;
	
	private String OldPassword;
	
	private String NewPassword;

	}
