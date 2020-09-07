import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-template-configure',
  templateUrl: './template-configure.component.html',
  styleUrls: ['./template-configure.component.css']
})
export class TemplateConfigureComponent implements OnInit {

  templateData : any ='';
  constructor(private api: ApiService,private route: ActivatedRoute, private router: Router,private notifyService : NotificationService) { 
    this.getTemplateData();
  }

  
 

  ngOnInit() {

    this.getTemplateData();

  }

  getTemplateData(){
      this.api.getTemplateList().subscribe(res => {
        
        this.templateData = res;
       // console.log("templateData",this.templateData);
      });
            console.log("card", this.templateData)
     
    
    console.log("templateData", this.templateData)
  }

  deleteTemplate(id) {

    if(confirm("Are you sure to delete this Template? ")) {

      this.api.deleteTemplate(id).subscribe(res => {

       
        

      });
      this.notifyService.showSuccess("Template Deleted successfully !!",'Delete Template');

        this.router.navigate(['/Template-Configuration']);
        this.templateData.splice(id, 1);

        this.getTemplateData();


    }

  }


}
