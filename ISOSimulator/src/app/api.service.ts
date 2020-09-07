import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Response } from './response';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://10.44.11.47:8080';
  

  response: any = {};
  constructor(private http: HttpClient) { }
 API ={};
  getCards() {
    return this
           .http
           .get(`${this.url}/cards`);
  }

  getEditCard(id) {    
    return this
           .http
           .get(`${this.url}/cardById/${id}`);
  }

  getEmvEditCard(id) {    
    return this
           .http
           //.get(`${this.url}/cardById/${id}`);
           .get(`${this.url}/EMVDataByCardId/${id}`);
  }
  updateCard(obj){
    this
    .http
    .put(`${this.url}/update/`, obj)
    .subscribe(res => console.log('Update Complete'));
  }

  addCard(obj){
   /* this.API = this
    .http
    .post(`${this.url}/addCard/`, obj)
    .subscribe(res => {
      console.log('Update Complete')
      this.response = res;
    });

    return this.response;*/
    return this
    .http
    .post(`${this.url}/addCard/`,obj);
    //return this.http.post(`${this.url}/addCard/`, obj).subscribe(response => response);
    /*return this.http.get<ResponseOrders >(this.baseUrl,{
      params
   }).pipe(
      map(res => res.results || []),
      catchError(error => _throwError(error.message || error))
   );
*/
     
    //return this.API;
   
    /*  return this.http.post<Response>(`${this.url}/addCard/`, obj).pipe(
        retry(3), catchError(this.handleError<Response>('getSmartphone')));*/
    
  }

  

  deleteCard(id){
    return this
              .http
              .delete(`${this.url}/delete/${id}`);
  }
  getConnections() {
    return this
           .http
           .get(`${this.url}/connection/connections`);
  }

  getEditConnection(id) {    
    return this
           .http
           .get(`${this.url}/connection/ConnectionById/${id}`);
  }
  updateConnection(obj){
    this
    .http
    .put(`${this.url}/connection/updateConnection/`, obj)
    .subscribe(res => console.log('Update Complete'));
  }

  addConnection(obj){
    this
    .http
    .post(`${this.url}/connection/addConnection/`, obj)
    .subscribe(res => console.log('Added Complete'));
  }

  deleteConnection(id){
    return this
              .http
              .delete(`${this.url}/connection/deleteConnection/${id}`);
  }

  addUser(obj){
   return  this
    .http
    .post(`${this.url}/user/addUserProfile/`, obj)
    .subscribe(res => console.log('Added Complete'));
  }

  updateUser(obj){
   return  this
    .http
    .put(`${this.url}/user/updateUserProfile/`, obj)
    .subscribe(res => console.log('Update Complete'));
  }

  deleteUser(id){
    return this
              .http
              .delete(`${this.url}/user/delete/${id}`);
  }

  getUserList() {
    return this
           .http
           .get(`${this.url}/user/UserProfiles`);
  }

  getEditUser(id) {    
    return this
           .http
           .get(`${this.url}/user/UserProfileById/${id}`);
  }

  // getUserProfileById(id) {    
  //   return this
  //          .http
  //          .get(`${this.url}/UserProfileById/${id}`);
  // }

  updateUserProfile(obj){
    this
    .http
    .put(`${this.url}/user/updateUserProfile/`, obj)
    .subscribe(res => console.log('Update Complete'));
  }

  addEmv(obj){
    
    return this
    .http
    .post(`${this.url}/card/EMVData/`,obj);

  }

  updateEmv(obj){
    
    return this
    .http
    .put(`${this.url}/update/card/EMVData/`,obj);


  }

  login(name,password){
    return this
    .http
    .get(`${this.url}/user/login/${name}/${password}`);
  }

  updatePassword(obj)
  {
    return this
    .http
    .put(`${this.url}/user/changePassword/`, obj);
  }

  getTerminalData(id){
    return this.http.get(`${this.url}/visa/TerminalDataByUserId/${id}`);
  }

  updateTerminalData(obj){
    console.log("obj",obj)
  /*return    this
    .http
    .put(`${this.url}/updateTerminalData/`, obj)
    .subscribe(res => console.log('Update Complete'));*/
    return this
    .http
    .put(`${this.url}/visa/updateTerminalData/`,obj);
    
  }

  updateMasterTerminalData(obj){
    return this
    .http
    .put(`${this.url}/master/updateTerminalData/`,obj);
  }


  getMasterTerminalData(id){
    return this.http.get(`${this.url}/master/TerminalDataByUserId/${id}`);
  }


  getTransData(id){
    return this.http.get(`${this.url}/Schema/SchemaById/${id}`);
  }

  addTransaction(obj){
    return  this
    .http
    .post(`${this.url}/transaction/addTransaction/`, obj)
    .subscribe(res => console.log('Added Complete'));
    
  }

  getTemplateMsg(id){
    return this.http.get(`${this.url}/message/TemplateBySchemaId/${id}`);
  }

  getTemplateDataById(id){
    return this.http.get(`${this.url}/message/MessageById/${id}`);
  }
  
  getTemplateList(){
   
    return this
           .http
           .get(`${this.url}/message/TemplateMessages`);
  }

  getTemplates(){
    return this
           .http
           .get(`${this.url}/templates`);
  }
  updateTemplate(obj){
    this
    .http
    .put(`${this.url}/updateTemplate/`, obj)
    .subscribe(res => console.log('Update Complete'));
  }
 
  addTemplate(obj){
    this
    .http
    .post(`${this.url}/addTemplate/`, obj)
    .subscribe(res => console.log('Added Complete'));
  }

  getTransactionDetail(id) {    
    return this
           .http
           .get(`${this.url}/transaction/TransactionById/${id}`);
           
  }

  editTransaction(obj){ 
    return  this
    .http
    .put(`${this.url}/transaction/updateTransaction/`, obj)
    .subscribe(res => console.log('Update Complete'));

  }

  getMessageDetail(id){
    return this
           .http
           .get(`${this.url}/message/MessageById/${id}`);
           
  }

  deleteTemplate(id){

    return this

              .http

              .delete(`${this.url}/message/deleteMessage/${id}`);

  }
 

}

