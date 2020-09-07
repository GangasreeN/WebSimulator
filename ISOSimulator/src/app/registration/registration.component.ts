import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import * as CryptoJS from 'crypto-js';
import { NotificationService } from '../notification.service';
import { Router } from '@angular/router';
//import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  plainText:string;  
  encryptText: string;  
  encPassword= "FSSAgile";  
  decPassword = "FSSAgile";  
  conversionEncryptOutput: string;  
  conversionDecryptOutput:string; 
  constructor(private fb: FormBuilder, private ps: ProductsService,private notifyService : NotificationService,private router: Router) {
    
  } 

  ngOnInit() {
  }
  model: any = {};
  
  onSubmit() {
    let count =0;
    this.encrypt("encrypt",this.model.password);
    /*this.ps
      .getProducts()
      .subscribe((data: count) => {
        this.products = data;
    });
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));*/
    //this.encryptData(this.model.password)
    this.ps.addUser(this.model).subscribe(data => {
      this.notifyService.showSuccess("User added successfully !!",'User Registration');
      this.router.navigate(['login']);
    });
    
  }

 /* encryptData(data) {

    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data)).toString();
    } catch (e) {
      console.log(e);
    }
  }*/

  /*convertText(conversion:string) {  
    console.log("text",this.plainText);
      if (conversion=="encrypt") {  
        this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.plainText.trim(), this.encPassword.trim()).toString();  
      }  
      else {  
        this.conversionDecryptOutput = CryptoJS.AES.decrypt(this.encryptText.trim(), this.decPassword.trim()).toString(CryptoJS.enc.Utf8);  
       
    }  
  }  */

  encrypt(conversion:string,password) {  
    console.log("text",password);
    console.log("this.encPassword",this.encPassword)
      if (conversion=="encrypt") {  
        this.conversionEncryptOutput = CryptoJS.AES.encrypt(password.trim(), this.encPassword.trim()).toString(); 
        this.model.password =  this.conversionEncryptOutput;
        return;
      }  
      else {  
        this.conversionDecryptOutput = CryptoJS.AES.decrypt(this.encryptText.trim(), this.decPassword.trim()).toString(CryptoJS.enc.Utf8);  
       
    }  
  }

}
