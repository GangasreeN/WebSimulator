import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-list-connection',
  templateUrl: './list-connection.component.html',
  styleUrls: ['./list-connection.component.css']
})
export class ListConnectionComponent implements OnInit {

  constructor(private api: ApiService,private route: ActivatedRoute, private router: Router,private notifyService : NotificationService) { 

    this.getConnectionData();

  }

 

  connection : any ={};

  ngOnInit() {

    this.getConnectionData();

  }

 

  getConnectionData(){

   

    this.api.getConnections().subscribe(res => {

      this.connection = res;

    });

          console.log("connection", this.connection)

  }

 

  deleteConnection(id) {

    if(confirm("Are you sure to delete this connection? ")) {

      this.api.deleteConnection(id).subscribe(res => {

       
        

      });
      this.notifyService.showSuccess("Connection Deleted successfully !!",'Delete Connection');

        this.router.navigate(['/List-Connection']);
        this.connection.splice(id, 1);

        this.getConnectionData();


    }

  }


}
