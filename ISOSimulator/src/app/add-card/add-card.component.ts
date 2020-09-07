import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ApiService} from '../api.service'

import { ActivatedRoute, Router } from '@angular/router';

import { NotificationService } from '../notification.service';

import { formatDate } from '@angular/common';

@Component({

  selector: 'app-add-card',

  templateUrl: './add-card.component.html',

  styleUrls: ['./add-card.component.css']

})

export class AddCardComponent implements OnInit {

 
  isReadonly=false;
  title='Add Card';
  button='Add';
  button1="Configure EMV Data"
 APIRes : any = {};
  btn =0;

  cardId= "";
  emvButton = "Add Emv Data";
  emvBtn =0;
  model :any ={};

  opt =0;
addEmvBtn=0;
  userDetails = {

    userId :'',

    userName: '',

    empId : ''

 

  };

  constructor(private fb: FormBuilder,

    private route: ActivatedRoute,  private api: ApiService,

    private notifyService : NotificationService,private router: Router)

     {

      this.userDetails.userId = sessionStorage.getItem('id');

      this.userDetails.userName = sessionStorage.getItem('userName');

      }

 

  ngOnInit() {

    this.model.typeOfCard="Magnetic Stripe";
    

    this.route.params.subscribe(params => {

      this.cardId = params.id;

      this.opt = params.opt;

      this.api.getEditCard(this.cardId).subscribe(res => {

        //this.projectId = res.pr; 

        

        console.log("params",params);

        this.model = res;

        if(Object.keys(this.model).length !== 0 && this.opt==1){

          console.log(" this.Project", this.model);
          if(this.model.typeOfCard =='EMV'){
            this.emvBtn =1;
            this.emvButton ="Update"
          }

          this.isReadonly = !this.isReadonly;

          this.title = "Edit Card";

          this.button="Update";

          this.btn=1;

          this.model = res;

        

          this.cardId = res['cardId'];

         

          

        }else if(Object.keys(this.model).length !== 0 && this.opt==2){

          this.title = "Duplicate Card";

          this.button="Duplicate";

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

              this.model.track2 = this.model.cardNumber + '=' + this.model.discData;
    if(this.model.typeOfCard =='EMV'){
      this.model.emv_Type ="YES";
    }else{
      this.model.emv_Type ="NO";
    }

    console.log(this.userDetails)

    if(this.btn ==1){

      this.model.cardId = this.cardId;

      this.route.params.subscribe(params => {

        this.api.updateCard(this.model);

        this.notifyService.showSuccess("Card Updated successfully !!",'Edit Card');

        this.router.navigate(['/Card-List']);

      });

   

    }else if(this.btn ==2){

      this.model.cardId = '';

     /* this.route.params.subscribe(params => {

       this.APIRes =  this.api.addCard(this.model);
       console.log("APIRes",this.APIRes);

        this.notifyService.showSuccess("Card Duplicated successfully !!",'Duplicate Card');

        this.router.navigate(['/Card-List']);

      });*/
      console.log("dfd")
      this.api.addCard(this.model).subscribe(res => {
        this.APIRes = res;
        console.log("res",res)
        console.log("REs",this.APIRes);
        if(this.APIRes.status  == 201 || this.APIRes.status  == 200){
         
          if(this.model.emv_Type =="NO"){
            this.notifyService.showSuccess("Card Duplicated successfully !!",'Duplicate Card');
  
            this.router.navigate(['/Card-List']);
          }else{
            let id= this.APIRes.data;
            this.router.navigate(['Emv-Data/'+id+'/1']);
          }
        }else{
          console.log("this.APIRes.message",this.APIRes.message)
          this.notifyService.showError(this.APIRes.message,'Duplicate Card');
         
        }
        
      });

      
      
    }else{

     /* this.route.params.subscribe(params => {

        this.APIRes =  this.api.addCard(this.model);
        console.log("APIRes",this.APIRes);
        this.notifyService.showSuccess("Card added successfully !!",'Add Card');

        this.router.navigate(['/Card-List']);

      });*/
      this.api.addCard(this.model).subscribe(res => {
        this.APIRes = res;
        console.log("REs",res);
        if(this.APIRes.status  == 201){
         
          if(this.model.emv_Type =="NO"){
            this.notifyService.showSuccess("Card added successfully !!",'Add Card');
            this.addEmvBtn=1;

            this.router.navigate(['/Card-List']);
          }else{

            let id= this.APIRes.data;
            this.model.cardId =id;
            this.notifyService.showSuccess("Card added successfully !!",'Add Card');
            this.addEmvBtn=1;
            //this.router.navigate(['Emv-Data/'+id+'/1']);
          }
        }else{
          this.notifyService.showError(this.APIRes.message,'Add Card');
        }
        
      });
      /*this.api.addCard(this.model).subscribe(res => {
        console.log("Res", res)
        this.notifyService.showSuccess("Card added successfully !!",'Add Card');

        this.router.navigate(['/card-list']);
      });*/

      /*this.route.params.subscribe(params => {

        this.ps.addTask(this.model);

        this.notifyService.showSuccess("Task added successfully !!",'Add Task');

        this.router.navigate(['/Task-management/', this.projectId]);

      });*/

    }

  }


  // backClicked() {
  //   this.router.navigate(['Card-List'], { state: { redirect: this.router.url } })
  // }

  lettersOnly(event) 
    {
            var charCode = event.keyCode;
            console.log("charCode",charCode);
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8){
              console.log("charCode",true);
                return false;
          }else{
            console.log("charCode",false);
            return true;
          }
              
    }


 

}