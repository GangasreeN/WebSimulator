import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  userDetails = {
    userId: '',
    userName: '',
    empId: '',
  };
  model : any ={};
  APIRes : any ={};
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private api: ApiService,
    private notifyService: NotificationService,
    private router: Router
  ) {
    this.userDetails.userId = sessionStorage.getItem('id');
    this.userDetails.userName = sessionStorage.getItem('userName');
  }


  ngOnInit() {
  }

  onSubmit() {
    let count = 0;

   // this.model.empId = this.userDetails.empId;
   
    
      this.model.userProfileId =  this.userDetails.userId;
      this.api.updatePassword(this.model).subscribe(res => {
        this.APIRes = res;
        console.log("REs",res);
        if(this.APIRes.status  == 201 || this.APIRes.status  == 200){
         
         
            this.notifyService.showSuccess("Password Updated successfully !!",'Update Password');
  
            this.router.navigate(['/View-Profile']);
          
        }else{
          this.notifyService.showError(this.APIRes.message,'Update Password');
        }
        
      });
  }

}
