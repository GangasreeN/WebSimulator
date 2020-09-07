import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-emv-data',
  templateUrl: './emv-data.component.html',
  styleUrls: ['./emv-data.component.css']
})
export class EmvDataComponent implements OnInit {
  userDetails = {
    userId :'',
    userName: '',
    empId : ''

  };
  button ="Add";
  APIRes : any = {};
  model: any = {};
  btn =0;
  projectId ='';
  Project:any = {};
  title='Add EMV Data';
  screenType = 1;

  constructor(private fb: FormBuilder,private _location: Location,private route: ActivatedRoute,  private api: ApiService,private notifyService : NotificationService,private router: Router) { 
    this.userDetails.userId = sessionStorage.getItem('id');
    this.userDetails.empId = sessionStorage.getItem('empid');
    this.userDetails.userName = sessionStorage.getItem('userName');
  }


  // backClicked() {
  //   // this._location.back();
  //   this.router.navigate(['/Edit-Card'], { state: { redirect: this.router.url } })

  // }

  ngOnInit() {
    //this.model.emv_Type="NO";
    this.route.params.subscribe(params => {
      console.log("params.id",params.opt);
      this.screenType = params.opt;
      this.model.cardId = params.id;
      if(params.opt ==2){
        this.button ="Update";
        this.api.getEmvEditCard(params.id).subscribe(res => {
          //this.projectId = res.pr;
          this.projectId = params.id;
          this.Project = res;
          if(Object.keys(this.Project).length !== 0){
            console.log(" this.Project", this.Project);
            this.title = "EMV Data";
            this.btn=1;
            /*if(res['emvdata'] && res['emvdata']!=''){
              this.model = res['emvdata'];
            }*/
            this.model = res;
            
  
            this.model.createdBy= this.userDetails.userName;
            //this.model.startDate = formatDate(this.model.startDate, 'yyyy-MM-dd','en-US'); 
            //this.model.endDate = formatDate(this.model.endDate, 'yyyy-MM-dd','en-US'); 
            this.projectId = res['projectId'];
            
            
          }else{
            
          }
      });

      }
      
  });
}
  onSubmit() {
    let count =0;
   
    // this.model.projectId = this.projectId;
     this.model.empId = this.userDetails.empId;
    // this.model.track2 = this.model.cardNumber + '=' + this.model.discData;
    // console.log(this.userDetails)
    if(this.btn ==1){
      
      // this.route.params.subscribe(params => {
      //   this.ps.updateCard(this.model, params.id);
      //   this.notifyService.showSuccess("Card Updated successfully !!",'Edit Card'); 
      //   this.router.navigate(['/card-list/', this.projectId]);
      // });
      this.api.updateEmv(this.model).subscribe(res => {
        this.APIRes = res;
        console.log("REs",res);
        this.notifyService.showSuccess("EMV  Data Updated successfully !!",'Update Emv Data');
  
        this.router.navigate(['/Card-List']);
        /*if(this.APIRes.status  == 200){
         
          this.notifyService.showSuccess("EMV  Data Updated successfully !!",'Update Emv Data');
  
            this.router.navigate(['/Card-List']);
        }else{
          this.notifyService.showError(this.APIRes.message,'Update Emv Data');
        }*/
        
      });
    
    }else{
      
      // this.ps.addCard(this.model).subscribe(data => {
      //   this.notifyService.showSuccess("Card added successfully !!",'Add Card');
      //   this.router.navigate(['/card-list/', this.projectId]);
      // });
      /*this.route.params.subscribe(params => {
        this.ps.addTask(this.model);
        this.notifyService.showSuccess("Task added successfully !!",'Add Task');
        this.router.navigate(['/Task-management/', this.projectId]);
      });*/
      
      this.api.addEmv(this.model).subscribe(res => {
        this.APIRes = res;
        console.log("REs",res);
        if(this.APIRes.status  == 201){
         
          this.notifyService.showSuccess("EMV  Data added successfully !!",'Add Emv Data');
  
            this.router.navigate(['/Card-List']);
        }else{
          this.notifyService.showError(this.APIRes.message,'Add Emv Data');
        }
        
      });
    }
  }
}
