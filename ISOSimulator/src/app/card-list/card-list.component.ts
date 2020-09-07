import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor(private api: ApiService,private route: ActivatedRoute, private router: Router,private notifyService : NotificationService) {  
    this.getCardData();
  }

  card : any ={};
  ngOnInit() {
    this.getCardData();
  }

  getCardData(){
    
    this.api.getCards().subscribe(res => {
      this.card = res;
    });
          console.log("card", this.card)
  }

  

  deleteCard(id) {
    if(confirm("Are you sure to delete this card? ")) {
      this.api.deleteCard(id).subscribe(res => {
        
        
       
      });
      this.notifyService.showSuccess("Card Deleted successfully !!",'Delete Card');
      this.router.navigate(['/Card-List']);
      this.getCardData();
      this.card.splice(id, 1);
    }
    
  }

}
