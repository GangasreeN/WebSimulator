
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-terminal-setting',
  templateUrl: './terminal-setting.component.html',
  styleUrls: ['./terminal-setting.component.css']
})
export class TerminalSettingComponent implements OnInit {
 
  title='Terminal Setting';
  panelOpenState = false;
  title1='VISA';
  title2='Master Card';
  btn =0;
  model :any ={};
  master : any = {};
  APIRes : any ={}
  opt =0;
  userDetails = {
    userId :'',
    userName: '',
    empId : '',
    role:'',
    userType:''

  };
  constructor(private fb: FormBuilder,

    private route: ActivatedRoute,  private api: ApiService,

    private notifyService : NotificationService,private router: Router) 
     {
      this.userDetails.userId = sessionStorage.getItem('id');
      this.userDetails.userName = sessionStorage.getItem('userName');
      this.getTerminalDataByID();
      }

  ngOnInit() {
    this.getTerminalDataByID();
    this.getMasterTerminalData();
  }

  getTerminalDataByID(){
    
    this.route.params.subscribe((params) => {

      // this.userDetails.userid;
       console.log(this.userDetails.userId,"this.userDetails.userid");
 
       this.api.getTerminalData(this.userDetails.userId).subscribe(res => {
         this.model = res;
         
       });
     });
          
    
  }

  getMasterTerminalData(){
    this.route.params.subscribe((params) => {

      // this.userDetails.userid;
       console.log(this.userDetails.userId,"this.userDetails.userid");
 
       this.api.getMasterTerminalData(this.userDetails.userId).subscribe(res => {
         this.master = res;
         console.log("master", this.master)
         
       });
     });
  }

  onSubmit() {
    let count =0;
     
    console.log("this.model", this.model)
   /* if(this.btn ==0){
      /*this.model.userprofileId=this.userDetails.userId;
      console.log("this.dfgvdfgdfg", this.model)
       this.route.params.subscribe(params => {
        console.log("this.dfgdgdfgdfg", this.model)
        this.api.updateTerminalData(this.model);
       /*  this.notifyService.showSuccess("Terminal Data Updated successfully !!",'Update Terminal Data'); 
         this.router.navigate(['/Home']);*/
      // });

      this.model.userprofileId=this.userDetails.userId;
       this.api.updateTerminalData(this.model).subscribe(res => {
        this.APIRes = res;
        console.log("REs",res);
        if(this.APIRes.status  == 201){
         
          this.notifyService.showSuccess("Visa Terminal Updated successfully !!",'Update Terminal');
  
            this.router.navigate(['/Home']);
        }else{
          this.notifyService.showError(this.APIRes.message,'Update Terminal');
        }
        
      });
      /*}else{
        console.log("this.dgtfdfgfgfgh11111", this.model)
      }*/
    
  }

 
  onSubmitMaster(){
    this.model.userprofileId=this.userDetails.userId;
       this.api.updateMasterTerminalData(this.master).subscribe(res => {
        this.APIRes = res;
        console.log("REs",res);
        if(this.APIRes.status  == 201){
         
          this.notifyService.showSuccess("Master Terminal Updated successfully !!",'Update Terminal');
  
            this.router.navigate(['/Home']);
        }else{
          this.notifyService.showError(this.APIRes.message,'Update Terminal');
        }
        
      });
  }

 
}
