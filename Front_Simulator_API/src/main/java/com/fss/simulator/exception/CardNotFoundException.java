package com.fss.simulator.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus( value = HttpStatus.NOT_FOUND)
public class CardNotFoundException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;

	public CardNotFoundException (String message)
	{
	super(message)	;
	}

}
