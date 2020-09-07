import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  userDetails = {
    userId :'',
    userName: '',
    empId : '',
    role:'',
    userType:''

  };
  constructor() {
    this.userDetails.userId = sessionStorage.getItem('id');
      this.userDetails.userName = sessionStorage.getItem('userName');
      this.userDetails.role = sessionStorage.getItem('role');
      this.userDetails.userType = sessionStorage.getItem('userType');
      console.log("this.userDetails.userType ",this.userDetails.userType );
   }

  ngOnInit() {
  }

}
