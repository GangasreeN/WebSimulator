package com.fss.simulator.entity;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class ResponseDTO  implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Object data;
		
	private String error;
	
	private Integer status;
		
	private String message;
   	
	private String path;
	
	private String role;

	public ResponseDTO() {
		
	}
	
	public Object getData() {
		return data;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}
	

	
	@Override
	public String toString() {
		return "ResponseDTO [data=" + data + ", error=" + error + ", status=" + status + ", message=" + message
				+ ", path=" + path  + "]";
	}


	
}
