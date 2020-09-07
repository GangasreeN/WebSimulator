package com.fss.simulator.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.fss.simulator.entity.UserProfile;

public interface UserProfileRepository extends JpaRepository<UserProfile,Integer>{

	UserProfile findByUserName(String UserProfileName);
	UserProfile findByCreatedBy(String CreatedName );

}
