package com.fss.simulator.service;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fss.simulator.entity.UserProfile;
import com.fss.simulator.exception.CardNotFoundException;
import com.fss.simulator.repository.UserProfileRepository;

@Service
public class UserProfileService {
	@Autowired
	private UserProfileRepository repository;
	
	
	public UserProfile saveUserProfile(UserProfile userprofile)
	{
		
		return repository.save(userprofile);
	}
	public List<UserProfile> saveUserProfiles(List<UserProfile> userprofile)
	{
		return repository.saveAll(userprofile);
	}
	public List<UserProfile> getUserProfiles()
	{
		return repository.findAll();
	}
	public UserProfile getUserProfilebyUserProfileId(int UserProfileid)
	{
		return repository.findById(UserProfileid).orElseThrow(() -> new CardNotFoundException("UserProfile Not Found with id "+ UserProfileid));
	}
	public UserProfile getUserProfilebyUserProfileName(String username)
	{
		return repository.findByUserName(username);
	}
	public UserProfile getByCreatedBy(String CreatedName )
	{
		return repository.findByCreatedBy(CreatedName);
	}
	public String deleteUserProfile(int UserProfileid)
	{
		repository.deleteById(UserProfileid);
		return "user removed" + UserProfileid;
	}
	public UserProfile updateUserProfile(UserProfile userprofile) throws ParseException
	{
		UserProfile existinguserprofile= repository.findById(userprofile.getUserProfileId()).orElse(null);
		
		existinguserprofile.setUserName(userprofile.getUserName());
		existinguserprofile.setEmpId(userprofile.getEmpId());
		existinguserprofile.setEmailId(userprofile.getEmailId());
		existinguserprofile.setRole(userprofile.getRole());
		existinguserprofile.setUserType(userprofile.getUserType());
		existinguserprofile.setStatus(userprofile.getStatus());
		existinguserprofile.setPassword(userprofile.getPassword());
		existinguserprofile.setCreatedBy(userprofile.getCreatedBy());
		existinguserprofile.setNoOfAttempts(userprofile.getNoOfAttempts());
		existinguserprofile.setTimeZone(userprofile.getTimeZone());
				
		return repository.save(existinguserprofile);
	}
	public UserProfile updateUserProfilePassword(UserProfile userprofile) throws ParseException
	{
		UserProfile existinguserprofile= repository.findById(userprofile.getUserProfileId()).orElse(null);
		
		existinguserprofile.setPassword(userprofile.getPassword());				
		return repository.save(existinguserprofile);
	}
}
