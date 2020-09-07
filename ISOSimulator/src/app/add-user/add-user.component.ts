import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  title = 'Add User';
  btn = 0;
  userid = '';
  model: any = {};
  opt = 0;
  userDetails = {
    userId: '',
    userName: '',
    empId: '',
  };
  
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
    // this.model.emv_Type = 'NO';
    this.route.params.subscribe((params) => {
      this.userid = params.id;
      console.log(this.userid,"this.userid");
      this.opt = params.opt;
      this.api.getEditUser(this.userid).subscribe((res) => {
        //this.projectId = res.pr;

        console.log('params', params);
        this.model = res;
        if (Object.keys(this.model).length !== 0 && this.opt == 1) {
          console.log(' this.Project', this.model);
          this.title = 'Edit User';
          this.btn = 1;
          this.model = res;

          this.userid = res['userid'];
        } else {
        }
      });
    });
  }

  onSubmit() {
    let count = 0;

   // this.model.empId = this.userDetails.empId;
    this.model.track2 =
      this.model.cardNumber + '=' + this.model.cvv + '=' + this.model.pin;
    console.log(this.userDetails);
    if (this.btn == 1) {
      this.model.userid = this.userid;
      this.route.params.subscribe((params) => {
        this.api.updateUser(this.model);
        this.notifyService.showSuccess(
          'User Updated successfully !!',
          'edit-user'
        );
        this.router.navigate(['/User-Management']);
      });
    } else {
      this.route.params.subscribe((params) => {
        this.api.addUser(this.model);
        this.notifyService.showSuccess(
          'User added successfully !!',
          'add-user'
        );
        this.router.navigate(['/User-Management']);
      });
      /*this.route.params.subscribe(params => {
        this.ps.addTask(this.model);
        this.notifyService.showSuccess("Task added successfully !!",'Add Task');
        this.router.navigate(['/Task-management/', this.projectId]);
      });*/
    }
  }
}
