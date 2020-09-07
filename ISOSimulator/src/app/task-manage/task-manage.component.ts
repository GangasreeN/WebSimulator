import { Component, OnInit } from '@angular/core';
import Project from '../Project';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-task-manage',
  templateUrl: './task-manage.component.html',
  styleUrls: ['./task-manage.component.css']
})
export class TaskManageComponent implements OnInit {

  projectId ='';
  userDetails = {
    userId :'',
    userName: '',
    empId : ''

  };
  leaveBalance:boolean=false;
  applyLeave:boolean=true;
  /*fromDate=newDate();
  toDate=newDate();*/
  days:any;
  todateSec:any;
  fromdateSec:any;
  millisecondsPerDay:any;
  diff:any;
  weeks:any;
  leaveDays='';
  Project:any = {};
  constructor(private ps: ProductsService,private route: ActivatedRoute, private router: Router,private notifyService : NotificationService) { 
    this.userDetails.userId = sessionStorage.getItem('id');
    this.userDetails.empId = sessionStorage.getItem('empid');
    this.userDetails.userName = sessionStorage.getItem('userName');
  }

  ngOnInit() {
    this.getProject();
  }
  getProject(){
    this.route.params.subscribe(params => {
      this.projectId = params.id;
      console.log(" this.projectId", this.projectId);
      this.ps.getTask(params.id).subscribe(res => {
        
       
        this.Project = res;
        console.log(" this.Project", this.Project[0]['startDate']);
        //this.workingDayCalculation(this.Project.startDate,this.Project.endDate);
        this.Project.startDate = formatDate(this.Project[0]['startDate'], 'MM-dd-yyyy','en-US'); 
        this.Project.endDate = formatDate(this.Project[0]['endDate'], 'MM-dd-yyyy','en-US'); 
        console.log("date",new Date(this.Project.startDate) );
        /*var dDate1 = new Date("07-01-2020");
        var dDate2 = new Date("07-21-2020");*/
        
       
        //this.calcBusinessDays(this.Project[0]['startDate'], this.Project[0]['endDate']);
        /*console.log("this.Project.startDate",this.Project[0]['startDate']);
        console.log("this.Project.endDate",this.Project[0]['endDate']);
        console.log(" this.Project", this.Project);*/

        Object.keys(res).map((key)=>{
           //return res[key]
        
           var dDate1 = new Date(res[key]['startDate']);
            var dDate2 = new Date(res[key]['endDate']);
           //var dDate2 = new Date();
          
            this.Project[key] = res[key];
            //console.log("this.Project[key]['startDate']", new Date(this.Project[key].startDate));
            this.Project[key]['days'] =this.calcBusinessDays(new Date(this.Project[key].startDate),new Date(this.Project[key].endDate));
            this.Project[key]['remainDays'] =this.calcBusinessDays(new Date(),new Date(this.Project[key].endDate));
           //this.Project[key]['days'] =key;
           if(this.Project[key]['remainDays']>this.Project[key]['days']){
            this.Project[key]['completePercent'] = 100;
           }else if(this.Project[key]['remainDays']<0){
            this.Project[key]['completePercent'] = 100;
           }
           else{
            this.Project[key]['completePercent'] = ((this.Project[key]['remainDays'] / this.Project[key]['days'] )*100).toFixed(2);
           }
           
            console.log("this.Project",this.Project);
          });
    });
  });
  }

 /* workingDayCalculation(fromDate,toDate){
    console.log(fromDate,toDate);
    //this.fromDate = event.target.value;
    fromDate = new Date(fromDate);
    toDate = new Date(toDate);
console.log(fromDate,toDate);
this.todateSec = new Date(toDate);
this.fromdateSec = new Date(fromDate);
 
if (this.todateSec < this.fromdateSec)
alert('To date must be grater that from date!');
 
 
 
// Calculate days between dates
this.millisecondsPerDay = 86400 * 1000; // Day in milliseconds
this.fromdateSec.setHours(0,0,0,1); // Start just after midnight
this.todateSec.setHours(23,59,59,999); // End just before midnight
this.diff = this.todateSec - this.fromdateSec; // Milliseconds between datetime objects 
this.days = Math.ceil(this.diff / this.millisecondsPerDay);
 
// Subtract two weekend days for every week in between
this.weeks = Math.floor(this.days / 7);
this.days = this.days - (this.weeks * 2);
 
// Handle special cases
this.fromdateSec = this.fromdateSec.getDay();
this.todateSec = this.todateSec.getDay();
 
// Remove weekend not previously removed. 
if (this.fromdateSec - this.todateSec > 1) 
this.days = this.days - 2; 
 
// Remove start day if span starts on Sunday but ends before Saturday
if (this.fromdateSec == 0 && this.todateSec != 6)
this.days = this.days - 1; 
 
// Remove end day if span ends on Saturday but starts after Sunday
if (this.todateSec == 6 && this.fromdateSec != 0){
this.days = this.days - 1 ;
}
this.leaveDays = this.days;
if(this.leaveDays =='NaN' || this.leaveDays =='' || this.leaveDays <='0' || this.leaveDays =='undefined'){
this.leaveDays ='';
}else{
this.leaveDays = this.days;
}
 
 
}*/
 
/*onKeyUptoDate(fromDate,toDate) {

console.log(toDate);
//alert(this.toDate);
//alert(this.fromDate);
 
this.todateSec = new Date(toDate);
this.fromdateSec = new Date(fromDate);
 
if (this.todateSec < this.fromdateSec)
alert('To date must be grater that from date!');
 
// Calculate days between dates
this.millisecondsPerDay = 86400 * 1000; // Day in milliseconds
this.fromdateSec.setHours(0, 0, 0, 1); // Start just after midnight
this.todateSec.setHours(23, 59, 59, 999); // End just before midnight
this.diff = this.todateSec - this.fromdateSec; // Milliseconds between datetime objects 
this.days = Math.ceil(this.diff / this.millisecondsPerDay);
 
// Subtract two weekend days for every week in between
this.weeks = Math.floor(this.days / 7);
this.days = this.days - (this.weeks * 2);
 
// Handle special cases
this.fromdateSec = this.fromdateSec.getDay();
this.todateSec = this.todateSec.getDay();
 
// Remove weekend not previously removed. 
if (this.fromdateSec - this.todateSec > 1) 
this.days = this.days - 2; 
 
// Remove start day if span starts on Sunday but ends before Saturday
if (this.fromdateSec == 0 && this.todateSec != 6)
this.days = this.days - 1; 
 
// Remove end day if span ends on Saturday but starts after Sunday
if (this.todateSec === 6 && this.fromdateSec !== 0) {
this.days = this.days - 1 ;
}
this.leaveDays = this.days;
if ( this.leaveDays === 'NaN' || this.leaveDays === '' || this.leaveDays <= '0' || this.leaveDays =='undefined'){
this.leaveDays = '';
} else {
this.leaveDays = this.days;
}

  }*/


   // product-get.component.ts

   deleteTask(id) {
    this.ps.deleteTask(id).subscribe(res => {
      this.Project.splice(id, 1);
      this.notifyService.showSuccess("Task Deleted successfully !!",'Delete Task');
    });
  }


  calcBusinessDays(dDate1, dDate2) { // input given as Date objects
    console.log("dDate1",dDate1);
    var iWeeks, iDateDiff, iAdjust = 0;
    if (dDate2 < dDate1) return -1; // error code if dates transposed
    var iWeekday1 = dDate1.getDay(); // day of week
    var iWeekday2 = dDate2.getDay();
    iWeekday1 = (iWeekday1 == 0) ? 7 : iWeekday1; // change Sunday from 0 to 7
    iWeekday2 = (iWeekday2 == 0) ? 7 : iWeekday2;
    if ((iWeekday1 > 5) && (iWeekday2 > 5)) iAdjust = 1; // adjustment if both days on weekend
    iWeekday1 = (iWeekday1 > 5) ? 5 : iWeekday1; // only count weekdays
    iWeekday2 = (iWeekday2 > 5) ? 5 : iWeekday2;
  
    // calculate differnece in weeks (1000mS * 60sec * 60min * 24hrs * 7 days = 604800000)
    iWeeks = Math.floor((dDate2.getTime() - dDate1.getTime()) / 604800000)
  
    if (iWeekday1 < iWeekday2) { //Equal to makes it reduce 5 days
      iDateDiff = (iWeeks * 5) + (iWeekday2 - iWeekday1)
    } else {
      iDateDiff = ((iWeeks + 1) * 5) - (iWeekday1 - iWeekday2)
    }
  
    iDateDiff -= iAdjust // take into account both days on weekend
  console.log("iDateDiff",iDateDiff);
  console.log("iDateDiff+1",iDateDiff +1 );
    return (iDateDiff + 1); // add 1 because dates are inclusive
  }

}
