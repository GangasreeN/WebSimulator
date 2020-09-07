import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userDetails = {
    userid :'',
    userName: '',
    empId : ''

  };
  model: any = {};
  btn =0;
  projectId ='';
  Project:any = {};
  title='User Profile';
  user: any={};


  constructor(private fb: FormBuilder,

    private route: ActivatedRoute,  private api: ApiService,

    private notifyService : NotificationService,private router: Router)

     {

      this.userDetails.userid = sessionStorage.getItem('id');

      this.userDetails.userName = sessionStorage.getItem('userName');

      }

 

  ngOnInit() {
  

    this.route.params.subscribe((params) => {

     // this.userDetails.userid;
      console.log(this.userDetails.userid,"this.userDetails.userid");

      this.api.getEditUser(this.userDetails.userid).subscribe(res => {
        

        console.log("params",params);

        this.model = res;

        if(Object.keys(this.model).length !== 0){

          console.log(" this.Project", this.model);

          this.title = "User Profile";

          this.model =res;
this.userDetails.userid=res['userid'];
         
        }else{

        }
      });
    });
        }
          
  onSubmit() {
    let count =0;
   
    // this.model.projectId = this.projectId;
    // this.model.empId = this.userDetails.empId;
    // this.model.track2 = this.model.cardNumber + '=' + this.model.discData;
     console.log(this.userDetails);
    if(this.btn ==0){
      this.model.userid=this.userDetails.userid;
       this.route.params.subscribe(params => {
        this.api.updateUserProfile(this.model);
         this.notifyService.showSuccess("Time zone Updated successfully !!",'Edit User'); 
         this.router.navigate(['/Home/', this.projectId]);
       });
    
    }else{
      
      
    }
  }
}

