import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

//  uri = 'http://10.44.11.47:4003/products';
uri = 'http://10.44.11.41:4003/products';

  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductDescription, ProductPrice) {
    console.log(ProductName, ProductDescription, ProductPrice);
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getProducts() {
    return this
           .http
           .get(`${this.uri}`);
  }
  

  editProduct(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteProduct(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }

  addUser(userInfo) {
    console.log("userInfo",userInfo);
   /* const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };*/
    /*return this.http.post(`${this.uri}/addUser`, userInfo)
        .subscribe(res => console.log('Done'));*/
        return this.http.post(`${this.uri}/addUser`, userInfo);
  }

  getProject(id){
    return this.http.get(`${this.uri}/getProject/${id}`);
  
  }

  getProjectID(id){
    return this.http.get(`${this.uri}/getProjectID/${id}`);
  }

  getUserCount() {
    return this
           .http
           .get(`${this.uri}`);
  }

  login(userName) {
    console.log("userName",userName)
    return this
            .http
            .get(`${this.uri}/login/${userName}`);
  }

  
  addProject(projectInfo) {
    console.log("projectInfo",projectInfo);
   /* const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };*/
    /* this.http.post(`${this.uri}/addProject`, projectInfo)
        .subscribe(res => console.log('Done'));*/
        return this.http.post(`${this.uri}/addProject`, projectInfo);
  }

  addAction(actionInfo){
    console.log("projectInfo",actionInfo);
    //var id = actionInfo.id;
    /*this.http.post(`${this.uri}/updateAction`, actionInfo)
        .subscribe(res => console.log('Done'));*/
        return this.http.post(`${this.uri}/addAction`, actionInfo);
  }

  addDefect(defectInfo) {
   
   /* const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };*/
    /* this.http.post(`${this.uri}/addDefect`, defectInfo)
        .subscribe(res => console.log('Done'));*/
        return this.http.post(`${this.uri}/addDefect`, defectInfo);
  }


  /** Get Defect data */
  getDefect(id) {
    return this
            .http
            .get(`${this.uri}/getDefect/${id}`);
  }

  getAction(id){
    return this
    .http
    .get(`${this.uri}/getAction/${id}`);
  }
  getTask(id) {
    return this
            .http
            .get(`${this.uri}/getTask/${id}`);
  }


  getEditTask(id) {
    return this
            .http
            .get(`${this.uri}/getEditTask/${id}`);
  }
  addTask(taskInfo) {
    console.log("taskInfo",taskInfo);
   /* const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };*/
    /* this.http.post(`${this.uri}/addDefect`, defectInfo)
        .subscribe(res => console.log('Done'));*/
     
        return this.http.post(`${this.uri}/addTask`, taskInfo);
  }

  addEffort(effortInfo) {
    console.log("effortInfo",effortInfo);
   /* const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };*/
    /* this.http.post(`${this.uri}/addDefect`, defectInfo)
        .subscribe(res => console.log('Done'));*/
        return this.http.post(`${this.uri}/addEffort`, effortInfo);
  }

  getEffort(id) {
    return this
            .http
            .get(`${this.uri}/getEffort/${id}`);
  }

  addHighlight(highlightInfo) {
    console.log("highlightInfo",highlightInfo);
 
        return this.http.post(`${this.uri}/addHighlight`, highlightInfo);
  }

  
  addFinance(financeInfo) {
 
        return this.http.post(`${this.uri}/addFinance`, financeInfo);
  }

  getFinance(id){
    return this
    .http
    .get(`${this.uri}/getFinance/${id}`);
  }

  getEditProject(id) {
    return this
            .http
            .get(`${this.uri}/editProject/${id}`);
  }


  updateProject(ProjectDetail, id) {
    /*const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };*/
    this
      .http
      .post(`${this.uri}/updateProject/${id}`, ProjectDetail)
      .subscribe(res => console.log('Update Complete'));
  }

  updateHighlight(ProjectDetail, id){
    this
      .http
      .post(`${this.uri}/updateHighlight/${id}`, ProjectDetail)
      .subscribe(res => console.log('Update Complete'));
  }

  getHighlight(id) {
    return this
            .http
            .get(`${this.uri}/getHighlight/${id}`);
  }

  updateTask(ProjectDetail, id){
    this
    .http
    .post(`${this.uri}/updateTask/${id}`, ProjectDetail)
    .subscribe(res => console.log('Update Complete'));
  }

  updateDefect(ProjectDetail, id){
    this
      .http
      .post(`${this.uri}/updateDefect/${id}`, ProjectDetail)
      .subscribe(res => console.log('Update Complete'));
  }

  getEditAction(id) {
    return this
            .http
            .get(`${this.uri}/getEditAction/${id}`);
  }

  updateAction(ProjectDetail, id){
    this
    .http
    .post(`${this.uri}/updateAction/${id}`, ProjectDetail)
    .subscribe(res => console.log('Update Complete'));
  }


  
  getEditEffort(id) {
    return this
            .http
            .get(`${this.uri}/getEditEffort/${id}`);
  }


  updateEffort(ProjectDetail, id){
    this
    .http
    .post(`${this.uri}/updateEffort/${id}`, ProjectDetail)
    .subscribe(res => console.log('Update Complete'));
  }

  getEditFinance(id) {
    return this
            .http
            .get(`${this.uri}/getEditFinance/${id}`);
  }


  updateFinance(ProjectDetail, id){
    this
    .http
    .post(`${this.uri}/updateFinance/${id}`, ProjectDetail)
    .subscribe(res => console.log('Update Complete'));
  }

  deleteTask(id) {
    return this
              .http
              .get(`${this.uri}/deleteTask/${id}`);
  }

  deleteProject(id) {
    return this
              .http
              .get(`${this.uri}/deleteProject/${id}`);
  }

  deleteAction(id) {
    return this
              .http
              .get(`${this.uri}/deleteAction/${id}`);
  }

  deleteDefect(id) {
    return this
              .http
              .get(`${this.uri}/deleteDefect/${id}`);
  }

  deleteHighlight(id) {
    return this
              .http
              .get(`${this.uri}/deleteHighlight/${id}`);
  }

  deleteEffort(id) {
    return this
              .http
              .get(`${this.uri}/deleteEffort/${id}`);
  }

  deleteFinance(id) {
    return this
              .http
              .get(`${this.uri}/deleteFinance/${id}`);
  }

  getEditDefect(id) {
    return this
            .http
            .get(`${this.uri}/getEditDefect/${id}`);
  }

}
