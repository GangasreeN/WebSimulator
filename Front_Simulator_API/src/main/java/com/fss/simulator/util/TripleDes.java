package com.fss.simulator.util;

import java.util.Base64;
import java.util.Calendar;
import java.util.Date;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

public  class TripleDes {
	
	
	static Cipher cipher;
	
		
	public static  String getKey() throws Exception
	{
		KeyGenerator keyGenerator = KeyGenerator.getInstance("DESede");
		keyGenerator.init(112);
		SecretKey secretKey = keyGenerator.generateKey();
		cipher= Cipher.getInstance("DESede");
		return Base64.getEncoder().encodeToString(secretKey.getEncoded());
	}
     
    public static Date getNextExpiryDate(int keyExpiryDuration) {
		  Calendar calendar = Calendar.getInstance();
	      Date currentDate = new Date();
	      calendar.setTime(currentDate);
	      calendar.add(Calendar.DATE, keyExpiryDuration);
	      Date nextExpiryDate = calendar.getTime();
	      System.out.println("nextExpiryDate"+ nextExpiryDate);
		  return nextExpiryDate;
	  
	  }
	  
	public  static String encrypt(String plainText, String encodedKey) throws Exception
	{
		byte[] decodedKey = Base64.getDecoder().decode(encodedKey);
		SecretKey secretKey = new SecretKeySpec(decodedKey, 0, decodedKey.length, "DESede"); 
		byte[] plainTextByte = plainText.getBytes();
		cipher= Cipher.getInstance("DESede");
		cipher.init(Cipher.ENCRYPT_MODE, secretKey);
		byte[] encryptedByte = cipher.doFinal(plainTextByte);
		Base64.Encoder encoder = Base64.getEncoder();
		String encryptedText = encoder.encodeToString(encryptedByte);
		System.out.println("encrypted data  === "  +encryptedText);
		return encryptedText;
	}

	public static String decrypt(String encryptedText, String encodedKey) throws Exception 
	{
		//System.out.println(encryptedText+""+encodedKey);
		byte[] decodedKey = Base64.getDecoder().decode(encodedKey);
		SecretKey secretKey = new SecretKeySpec(decodedKey, 0, decodedKey.length, "DESede"); 
		Base64.Decoder decoder = Base64.getDecoder();
		byte[] encryptedTextByte = decoder.decode(encryptedText);
		cipher= Cipher.getInstance("DESede");
		cipher.init(Cipher.DECRYPT_MODE, secretKey);
		byte[] decryptedByte = cipher.doFinal(encryptedTextByte);
		String decryptedText = new String(decryptedByte);
		return decryptedText;
	}

}
