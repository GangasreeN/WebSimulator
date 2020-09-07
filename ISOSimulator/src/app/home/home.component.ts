import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
      console.log(" this.userDetails", this.userDetails);
  }

  ngOnInit() {

    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') ;
      location.reload() ;
    } else {
      localStorage.removeItem('foo') ;
    }
  }

}
