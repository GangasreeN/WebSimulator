import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  userDetails = {
    userId :'',
    userName: '',
    empId : ''

  };
  menuFlag =0;
  projectId ='';
  Project:any = {};
  title='Add Task';
  btn =0;
  model: any = {};
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,  private ps: ProductsService,private notifyService : NotificationService,private router: Router) { 
    this.userDetails.userId = sessionStorage.getItem('id');
    this.userDetails.empId = sessionStorage.getItem('empid');
    this.userDetails.userName = sessionStorage.getItem('userName');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      
      this.ps.getEditTask(params.id).subscribe(res => {
        //this.projectId = res.pr;
        this.projectId = params.id;
        this.Project = res;
        if(Object.keys(this.Project).length !== 0){
          console.log(" this.Project", this.Project);
          this.title = "Edit Task";
          this.btn=1;
          this.model = res;
          this.model.startDate = formatDate(this.model.startDate, 'yyyy-MM-dd','en-US'); 
          this.model.endDate = formatDate(this.model.endDate, 'yyyy-MM-dd','en-US'); 
          this.projectId = res['projectId'];
          
          
        }else{
          
        }
    });
  });
  }
  
  onSubmit() {
    let count =0;
   
    this.model.projectId = this.projectId;
    this.model.empId = this.userDetails.empId;
    console.log(this.userDetails)
    if(this.btn ==1){
      
      this.route.params.subscribe(params => {
        this.ps.updateTask(this.model, params.id);
        this.notifyService.showSuccess("Task Updated successfully !!",'Edit Task'); 
        this.router.navigate(['/Task-management/', this.projectId]);
      });
    
    }else{
      
      this.ps.addTask(this.model).subscribe(data => {
        this.notifyService.showSuccess("Task added successfully !!",'Add Task');
        this.router.navigate(['/Task-management/', this.projectId]);
      });
      /*this.route.params.subscribe(params => {
        this.ps.addTask(this.model);
        this.notifyService.showSuccess("Task added successfully !!",'Add Task');
        this.router.navigate(['/Task-management/', this.projectId]);
      });*/
    }
  }

}
