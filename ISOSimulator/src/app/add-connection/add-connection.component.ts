import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService} from '../api.service';
import { HttpClient  } from '@angular/common/http';


@Component({
  selector: 'app-add-connection',
  templateUrl: './add-connection.component.html',
  styleUrls: ['./add-connection.component.css']
})
export class AddConnectionComponent implements OnInit {

  ipAddress = '';
  title='Add Connection';

  btn =0;


  connectionId= "";

  model :any ={};

  opt =0;

  isReadonly=false;
  packed=true;
  unpacked=false;
  template=false;
  

  userDetails = {

    userId :'',

    userName: '',

    empId : ''

 

  };

  constructor(private fb: FormBuilder,private http:HttpClient,

    private route: ActivatedRoute,  private api: ApiService,

    private notifyService : NotificationService,private router: Router)

     {

      this.userDetails.userId = sessionStorage.getItem('id');

      this.userDetails.userName = sessionStorage.getItem('userName');

      }


      getIPAddress()
      {
        this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
          this.ipAddress = res.ip;
        });
      }

  ngOnInit() {
    this.getIPAddress();

    this.model.networkType="VISA";
    this.model.createdBy = this.userDetails.userId;

    this.route.params.subscribe(params => {

      this.connectionId = params.id;

      this.opt = params.opt;

      this.api.getEditConnection(this.connectionId).subscribe(res => {

        //this.projectId = res.pr;

      

        

        console.log("params",params);

        this.model = res;

        if(Object.keys(this.model).length !== 0 && this.opt==1){

          console.log(" this.Project", this.model);

          this.isReadonly = !this.isReadonly;

          this.title = "Edit Connection";

          this.btn=1;

          this.model = res;

        

          this.connectionId = res['connectionId'];

         

          

        }else if(Object.keys(this.model).length !== 0 && this.opt==2){

          this.title = "Duplicate Connection";

          this.btn=2;

          this.model = res;

        }else{

         

        }

    });

  });

  }

 

  onSubmit() {

    let count =0;

  

    

    this.model.empId = this.userDetails.empId;

              //this.model.track2 = this.model.cardNumber + '=' + this.model.discData;

    console.log(this.userDetails)

    if(this.btn ==1){

      this.model.connectionId = this.connectionId;

      this.route.params.subscribe(params => {

        this.api.updateConnection(this.model);

        this.notifyService.showSuccess("Connection Updated successfully !!",'Edit Connection');

        this.router.navigate(['/List-Connection']);

      });

   

    }else if(this.btn ==2){

      this.model.connectionId = '';

      this.route.params.subscribe(params => {

        this.api.addConnection(this.model);

        this.notifyService.showSuccess("Connection Duplicated successfully !!",'Duplicate Connection');

        this.router.navigate(['/List-Connection']);

      });

    }else{

      this.route.params.subscribe(params => {

        this.api.addConnection(this.model);

        this.notifyService.showSuccess("Connection added successfully !!",'Add Connection');

        this.router.navigate(['/List-Connection']);

      });

      

    }

}
}
