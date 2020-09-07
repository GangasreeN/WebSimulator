import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';
import bootstrap from "bootstrap";
import {NotificationService} from '../app/notification.service';
import Project from './Project';
import { ProductsService } from './products.service';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Configure Cards',
    children: [
      //{name: 'Add Project'},
     // {name: 'Card List'}
    ],
    
  }
  /*, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        /*children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]*/
      /*}, {
        name: 'Orange',
        /*children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]*/
      /*},
    ]
  },*/
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ISO Simulator';
  userDetails = {
    userId :'',
    userName: '',

  };
  menuFlag =0;
  Project: Project[];
  selectedValue: string = "";
  items = [
    { value: "0", view: "zero" },
    { value: "1", view: "one" },
    { value: "2", view: "Two" }
  ];
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  
  constructor(private ps: ProductsService,private loadingBar: SlimLoadingBarService, private router: Router,private notifyService : NotificationService) {
    this.dataSource.data = TREE_DATA;
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
    this.userDetails.userId = sessionStorage.getItem('id');
    this.userDetails.userName = sessionStorage.getItem('userName');
    if(this.userDetails.userId!='' && this.userDetails.userId!=null   && this.userDetails.userName!= ''&& this.userDetails.userName!= null){
      //console.log("this.userDetails.userId",this.userDetails.userId,this.userDetails.empId,this.userDetails.userName)
      this.menuFlag = 1;
    }else{
      this.menuFlag = 0;
    }
  }
  
  ngOnint(){
    this.userDetails.userId = sessionStorage.getItem('id');
    this.userDetails.userName = sessionStorage.getItem('userName');
    if(this.userDetails.userId!='' && this.userDetails.userId!=null   && this.userDetails.userName!= ''&& this.userDetails.userName!= null){
      //console.log("this.userDetails.userId",this.userDetails.userId,this.userDetails.empId,this.userDetails.userName)
      this.menuFlag = 1;
    }else{
      this.menuFlag = 0;
    }
   
    console.log("this.menuFlag ",this.menuFlag );
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  logout(){
    sessionStorage.clear();
    this.notifyService.showSuccess("User looged Out successfully !!",'User logout');
      this.router.navigate(['Login']);
  }
 
}
