import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-de',
  templateUrl: './de.component.html',
  styleUrls: ['./de.component.css']
})
export class DEComponent implements OnInit {

  model :any ={};

  constructor() { }

  ngOnInit() {
  }

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


field (event){
// console.log(event)
// console.log(this.model.selectedValuePAN)
  if(event == '**MAUNAL**'){
  this.model.PAN = 1

}
}

}
