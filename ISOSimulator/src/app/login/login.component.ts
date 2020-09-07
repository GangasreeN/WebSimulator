import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import * as CryptoJS from 'crypto-js';
import {ApiService} from '../api.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  plainText:string;  
  encryptText: string;  
  encPassword= "ISOSIMULATOR";  
  decPassword = "ISOSIMULATOR";  
  conversionEncryptOutput: string;  
  conversionDecryptOutput:string; 
  pass :string;

  constructor( private api : ApiService,private fb: FormBuilder, private route: ActivatedRoute,private router: Router, private ps: ProductsService,private notifyService : NotificationService) {
    
  }

  ngOnInit() {
   
  }
  model: any = {};
  APIRes : any ={};
  userDetails = {
    userId :'',
    userName: '',
    empId : '',
    role:'',
    userType:''

  };
  menuFlag =0;
  onSubmit() {
    let count =0;
    /*if(this.model.password!="" && this.model.userName!=""){
      sessionStorage.setItem('id','1');
      sessionStorage.setItem('userName',this.model.userName);
      this.userDetails.userId = sessionStorage.getItem('id');
      this.userDetails.userName = sessionStorage.getItem('userName');
      this.notifyService.showSuccess("User Login successfully !!",'User Login');
      this.router.navigate(['Home']);
    }*/
console.log("lkllklkl")
    this.api.login(this.model.userName,this.model.password).subscribe(res => {
      this.APIRes = res;
      console.log("REs",res);
      if(this.APIRes.status  == 201 || this.APIRes.status  == 200){
       
        console.log("test ---");
      sessionStorage.setItem('id',this.APIRes.data.userProfileId);
      sessionStorage.setItem('userName',this.APIRes.data.userName);
      sessionStorage.setItem('role',this.APIRes.data.role);
      sessionStorage.setItem('userType',this.APIRes.data.userType);
      this.userDetails.userId = sessionStorage.getItem('id');
      this.userDetails.userName = sessionStorage.getItem('userName');
      this.userDetails.role = sessionStorage.getItem('role');
      this.userDetails.userType = sessionStorage.getItem('userType');
          this.notifyService.showSuccess("Login successfull !!",'User Login');

          this.router.navigate(['/Home']);
        
      }else{
        console.log("test");
        this.notifyService.showError("Login Failed",'User Login');
      }
      
    });
    /*this.route.params.subscribe(params => {
      console.log("params",this.model)
      this.ps.login(this.model.userName).subscribe(res => {
        console.log("res",res[0]['password']);
        if(res!='' && res!= null){
          this.pass = res[0]['password'];
          this.encrypt("decrypt",this.pass);
          console.log("pass",this.pass,this.model.password);
          if(this.pass == this.model.password){
            sessionStorage.setItem('id',res[0]['_id']);
            sessionStorage.setItem('empid',res[0]['userName']);
            sessionStorage.setItem('userName',res[0]['firstName']);
            //this.menuFlag =1;
            this.userDetails.userId = sessionStorage.getItem('id');
            this.userDetails.empId = sessionStorage.getItem('empid');
            this.userDetails.userName = sessionStorage.getItem('userName');
            this.notifyService.showSuccess("User Login successfully !!",'User Login');
            this.router.navigate(['Project-management']);
            //this.router.navigateByUrl('home');
          }else{
            this.notifyService.showError("User Login Failed !!",'User Login');
          }
        }else{
          this.notifyService.showError("Server Error !!",'User Login');
        }
        
        //this.model = res;
    });
  });*/
  }
  encrypt(conversion:string,password) {  
    console.log("text",password);
    console.log("this.encPassword",this.encPassword)
      if (conversion=="encrypt") {  
        this.conversionEncryptOutput = CryptoJS.AES.encrypt(password.trim(), this.encPassword.trim()).toString(); 
        this.model.password =  this.conversionEncryptOutput;
        return;
      }  
      else {  
        this.conversionDecryptOutput = CryptoJS.AES.decrypt(password.trim(), this.decPassword.trim()).toString(CryptoJS.enc.Utf8);  
        //this.conversionDecryptOutput = CryptoJS.AES.decrypt(this.encryptText.trim(), this.decPassword.trim()).toString(CryptoJS.enc.Utf8);  
        this.pass =  this.conversionDecryptOutput;
        console.log(" this.model.password ",this.pass);
        return;
    }  
  }

  
}
