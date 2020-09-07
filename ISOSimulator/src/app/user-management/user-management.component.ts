import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private notifyService: NotificationService
  ) {
    this.getUserData();
  }

  card: any = {};

  ngOnInit() {
    this.getUserData();
   /* let timer = Observable.timer(2000, 5000);
    timer.subscribe(() => this.getUserData());*/
  }

  getUserData() {
    this.api.getUserList().subscribe((res) => {
      this.card = res;
    });

    console.log('user', this.card);
  }

  deleteUser(id) {
    if (confirm('Are you sure to delete this user? ')) {
      this.api.deleteUser(id).subscribe((res) => {
        

       
      });
      this.notifyService.showSuccess(
        'User Deleted successfully !!',
        'Delete User'
      );

      this.router.navigate(['/User-List']);
      this.card.splice(id, 1);

        this.getUserData();
    }
  }
}
