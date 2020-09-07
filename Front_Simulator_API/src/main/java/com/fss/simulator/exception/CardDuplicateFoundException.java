package com.fss.simulator.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus( value = HttpStatus.FOUND)
public class CardDuplicateFoundException  extends RuntimeException{
	private static final long serialVersionUID = 1L;

	public CardDuplicateFoundException (String message)
	{		
	super(message) ;	
	}
}
