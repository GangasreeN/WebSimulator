package com.fss.simulator.controller;

import java.text.ParseException;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fss.simulator.entity.UserProfile;
import com.fss.simulator.entity.Card;
import com.fss.simulator.entity.ChangePassword;
import com.fss.simulator.entity.ResponseDTO;
import com.fss.simulator.entity.VisaTerminalData;
import com.fss.simulator.service.CardService;
import com.fss.simulator.service.MasterTerminalDataService;
import com.fss.simulator.service.VisaTerminalDataService;
import com.fss.simulator.service.UserProfileService;

//@CrossOrigin(origins = "http://localhost:4211")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/user")

public class UserProfileController {
	@Autowired
	private UserProfileService service;
	@Autowired
	private VisaTerminalDataService visaservice;

	@Autowired
	private MasterTerminalDataService masterservice;

	/*
	 * @Autowired private TerminalData terminaldata;
	 */
	@PostMapping("/addUserProfile")
	public ResponseEntity<ResponseDTO> addConnection(@Valid @RequestBody UserProfile userprofile)
			throws ParseException {
		// product.setCreatedDateTime(Functions.createdTime1());
		UserProfile userprofile1 = null;
		ResponseDTO response = new ResponseDTO();
		try {
			userprofile.setPassword("123456");
			userprofile1 = service.saveUserProfile(userprofile);
		} catch (DataIntegrityViolationException d) {
			if (d.getMostSpecificCause().getMessage().contains("UNIQUE_USER_USERNAME_EMAILID_EMPID"))
				response.setMessage("USER NAME EMAILID EMPID should be unique");
			else
				response.setMessage(d.getMostSpecificCause().getMessage());
			response.setError(HttpStatus.BAD_REQUEST.getReasonPhrase());
			response.setStatus(Integer.valueOf(HttpStatus.BAD_REQUEST.value()));
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
		}

		response.setMessage("USERPROFILE is created Successfully");
		response.setStatus(Integer.valueOf(HttpStatus.CREATED.value()));
		response.setPath("/UserProfile/" + userprofile1.getUserProfileId());

		visaservice.DefaultVisaTerminalDataAdd(userprofile1.getUserProfileId());
		masterservice.DefaultMasterTerminalDataAdd(userprofile1.getUserProfileId());
		/*
		 * terminaldata.setUserprofileId(userprofile1.getUserProfileId());
		 * terminaldata.setMerchantTypeDE18("1519");
		 * terminaldata.setCountryCodeDE19("356");
		 * terminaldata.setAcquringInstitutionIdentificationCodeDE32("12345678911");
		 * terminaldata.setCardAcceptorTerminalIdentificationDE41("TERMID01");
		 * terminaldata.setCardAcceptorIdentificationCodeDE42("CARDACCEPTOR001");
		 * terminaldata.
		 * setCardAcceptorNameDE43("US BANK TEXAS            TEXAS        US");
		 * System.out.println("debug"); service1.saveTerminalData(terminaldata);
		 * System.out.println("debug1");
		 */

		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	@PostMapping("/login")
	public ResponseEntity<ResponseDTO> addCard(@Valid @RequestBody UserProfile userprofile) {

		List<UserProfile> list = service.getUserProfiles();
		List<UserProfile> userNameresult = list.stream().filter(existingUserProfile -> existingUserProfile.getUserName()
				.equalsIgnoreCase(existingUserProfile.getUserName())).collect(Collectors.toList());

		List<UserProfile> Passwordresult = list.stream()
				.filter(existingUserProfile -> existingUserProfile.getPassword().equals(userprofile.getUserName()))
				.collect(Collectors.toList());
		ResponseDTO response = new ResponseDTO();
		UserProfile userprofile1 = null;
		if (userNameresult.size() != 0 && Passwordresult.size() != 0) {

		}

		try {
			userprofile1 = service.saveUserProfile(userprofile);
		} catch (DataIntegrityViolationException d) {
			if (d.getMostSpecificCause().getMessage().contains("UNIQUE_USER_USERNAME"))
				response.setMessage("login failed");
			else
				response.setMessage(d.getMostSpecificCause().getMessage());
			response.setError(HttpStatus.BAD_REQUEST.getReasonPhrase());
			response.setStatus(Integer.valueOf(HttpStatus.BAD_REQUEST.value()));
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
		}

		response.setData(userprofile1.getEmpId());
		response.setMessage("Card is created Successfully");
		response.setStatus(Integer.valueOf(HttpStatus.CREATED.value()));
		response.setPath("/card/" + userprofile1.getEmpId());

		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	@PostMapping("/addUserProfiles")
	public List<UserProfile> addUserProfiles(@RequestBody List<UserProfile> userprofiles) {

		return service.saveUserProfiles(userprofiles);
	}

	@GetMapping("/UserProfiles")
	public List<UserProfile> findAllUserProfiles() {
		return service.getUserProfiles();
	}

	@GetMapping("/UserProfileById/{id}")
	public UserProfile findUserProfileById(@PathVariable int id) {
		return service.getUserProfilebyUserProfileId(id);
	}

	@GetMapping("/UserProfileName/{name}")
	public UserProfile findUserProfileByName(@PathVariable String name) {
		return service.getUserProfilebyUserProfileName(name);
	}

	@GetMapping("/login/{name}/{password}")
	public ResponseEntity<ResponseDTO> findUserProfileLogin(@PathVariable String name, @PathVariable String password) {
		UserProfile userprofile1 = null;
		ResponseDTO response = new ResponseDTO();
		userprofile1 = service.getUserProfilebyUserProfileName(name);
		if (userprofile1 == null) {
			response.setMessage("Invalid User Credentials");
			response.setError(HttpStatus.BAD_REQUEST.getReasonPhrase());
			response.setStatus(Integer.valueOf(HttpStatus.BAD_REQUEST.value()));
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
		}
		if (userprofile1.getPassword().equals(password)) {
			response.setData(userprofile1);
			response.setMessage("User is login Successfully");
			response.setStatus(Integer.valueOf(HttpStatus.CREATED.value()));
			response.setPath(userprofile1.getUserName());

			return new ResponseEntity<>(response, HttpStatus.CREATED);
		}
		response.setMessage("Invalid User Credentials");
		response.setError(HttpStatus.BAD_REQUEST.getReasonPhrase());
		response.setStatus(Integer.valueOf(HttpStatus.BAD_REQUEST.value()));
		return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
	}

	@GetMapping("/createdby/{createdby}")
	public UserProfile findUSerByCreatedBy(@PathVariable String createdby) {
		return service.getByCreatedBy(createdby);
	}

	@PutMapping("/updateUserProfile")
	public UserProfile updateUserProfile(@Valid @RequestBody UserProfile userprofile) throws ParseException {
		return service.updateUserProfile(userprofile);
	}

	@PutMapping("/changePassword")
	public ResponseEntity<ResponseDTO> updateUserProfilePassword(@Valid @RequestBody ChangePassword ChangePassword)
			throws ParseException {
		UserProfile userprofile = new UserProfile();
		ResponseDTO response = new ResponseDTO();
		userprofile = service.getUserProfilebyUserProfileId(ChangePassword.getUserProfileId());
		if (ChangePassword.getNewPassword().equals(ChangePassword.getOldPassword())) {

			response.setData(userprofile.getUserProfileId());
			response.setMessage("Same Password change the Password");
			response.setStatus(Integer.valueOf(HttpStatus.NON_AUTHORITATIVE_INFORMATION.value()));
			response.setPath("/user/" + userprofile.getEmpId());
			return new ResponseEntity<>(response, HttpStatus.NON_AUTHORITATIVE_INFORMATION);
		}
		if (userprofile.getPassword().equals(ChangePassword.getOldPassword())) {
			userprofile.setPassword(ChangePassword.getNewPassword());
			UserProfile userprofile1 = service.updateUserProfilePassword(userprofile);
			response.setData(userprofile1.getUserProfileId());
			response.setMessage("Successfuly Changed Password");
			response.setStatus(Integer.valueOf(HttpStatus.CREATED.value()));
			response.setPath("/user/" + userprofile1.getEmpId());
			return new ResponseEntity<>(response, HttpStatus.CREATED);
		}
		response.setMessage("Password Wrong");
		response.setError(HttpStatus.BAD_REQUEST.getReasonPhrase());
		response.setStatus(Integer.valueOf(HttpStatus.BAD_REQUEST.value()));
		return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
	}

	/*
	 * @PutMapping("/update/card/EMVData") public Connection
	 * updateCardEMVData(@Valid @RequestBody Connection connection) throws
	 * ParseException { return service.updateCardEMVData(connection); }
	 */
	@DeleteMapping("/delete/{id}")
	public String deleteUserProfile(@PathVariable int id) {
		return service.deleteUserProfile(id);
	}
}
