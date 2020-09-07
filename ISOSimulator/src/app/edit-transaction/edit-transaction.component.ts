import { Component, OnInit, Inject, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


import { ApiService} from '../api.service'

import { ActivatedRoute, Router } from '@angular/router';

import { NotificationService } from '../notification.service';


import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



import { formatDate } from '@angular/common';


export interface DialogData {
 
  mId: string;
  msgName : string;
  pickedMsg : string[];
  
   
 }


@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css']
})
export class EditTransactionComponent implements OnInit {

  @ViewChild('callAPIDialog', {static: false}) callAPIDialog: TemplateRef<any>;
  @ViewChild('callMessageDialog', {static: false}) callMessageDialog: TemplateRef<any>;
  

  public show:boolean = false;
  public showNone:boolean = true;
  public showtransaction:boolean = false;
  public showmessage:boolean = false;
  public showDE:boolean= false;
  public showMsg:boolean= false;
  public showmessageTemplate0200= false;
  public showmessageTemplate0800= false;
  public addTransaction: boolean= false;
  public addmessage:boolean = false;
  public buttonName:any = 'Show';
  public CheckedDataElements:boolean=false;
  public AllDataElements:boolean=false;
//seleMsg : any={};
seleMsg = [
  { 
      
  }
];
//newArr: any = [ ];
result:any={};
 newArr : Array<object> = [];
  msgId: string;
  msgName : string;
  pickedMsg : any ={};
  schemaMsg : any={};
  transMsg : any ={};

  transId ='';
  mId ='';
  msgBtn = 0;
  test =[];
  test1 : any ={};
  transTitle = "Add Transaction";
  msgTitle = "Add Message";
  dataArray  :any={};
  selectedItemsList = [];
  checkedIDs = [];
  selectedItemsList1 = [];
  checkedIDs1 = [];
  schemaData : any={};
  selectedMsg = [];
  selectedInMsg = [];
  selectedOutMsg = [];
  newArray : any = [];
  selectedReqMsg ='';
  selectedResMsg='';
  userDetails = {
    userId: '',
    userName: '',
    empId: '',
  };
  templateMessage : any ={};
  templateDataElement :any =[];
  checkboxesDataList = [
    {
      id: 'DE001',label: ' 001 Secondary Bitmap = ',isChecked: false
    },
    {
      id: 'DE002',
      label: ' 002 Primary account number (PAN) = ',
      isChecked: true,
      value:'4522000000000011'
    },
    {
      id: 'DE003',
      label: ' 003 Processing code = ',
      isChecked: true,
      value: '010000'
    },
    {
      id: 'DE004',
      label: ' 004 Amount, transaction = ',
      isChecked: false
    },
    {
      id: 'DE005',
      label: ' 005 Amount, settlement = ',
      isChecked: false
    },
    {
      id: 'DE006',
      label: ' 006 Amount, cardholder billing = ',
      isChecked: false
    },
    {
      id: 'DE007',
      label: ' 007 Transmission date & time = ',
      isChecked: false
    },
    {
      id: 'DE008',
      label: ' 008 Amount, cardholder billing fee = ',
      isChecked: false
    },
    {
      id: 'DE009',
      label: ' 009 Conversion rate, settlement = ',
      isChecked: false
    },
    {
      id: 'DE010',
      label: ' 010 Conversion rate, cardholder billing = ',
      isChecked: false
    },
    {
      id: 'DE011',
      label: ' 011 System trace audit number (STAN) = ',
      isChecked: true,
      value: '003336'
    }
  ];

  checkboxesDataList1 = [
    {
      id: 'MSG0800',
      label: '0800 Message',
      isChecked: false,
    },
    {
      id: 'MSG0810',
      label: '0810 Message',
      isChecked: false,
    },
    {
      id: 'MSG0100',
      label: '0100 Message',
      isChecked: false,
    },
    {
      id: 'MSG0110',
      label: '0110 Message',
      isChecked: false,
    },
    {
      id: 'MSG0200',
      label: '0200 Purchase Request',
      isChecked: false,
    },
    {
      id: 'MSG0210',
      label: '0210 Response',
      isChecked: false,
    },
  ];

  DataElements = [
    {
        num:'001',id: 'de001',sub: 0, label: ' 001 Secondary Bitmap ',isChecked: false , value:'**SYSTEM**'
      },
      {
        num:'002',id: 'de002',sub: 0,label: ' 002 Primary account number (PAN) ',isChecked: false , value: '**CARD**'
      },
      {
        num:'003',id: 'de003',sub: 0,label: ' 003 Processing code ',isChecked: false , value:'**MANUAL**'
      },
      {
        num:'004', id: 'de004',sub: 0,label: ' 004 Amount, transaction ',isChecked: false , value: '**MANUAL**'
      },
      {
        num:'005',id: 'de005',sub: 0,label: ' 005 Amount, settlement  ',isChecked: false , value: '**MANUAL**'
      },
      {
        num:'006',id: 'de006',sub: 0,label: ' 006 Amount, cardholder billing ',isChecked: false , value: '**MANUAL**'
      },
      {
        num:'007',id: 'de007',sub: 0,label: ' 007 Transmission date & time ',isChecked: false, value: '**SYSTEM**'
      },
    //   {
    //     id: 'de008',label: ' Amount, cardholder billing fee ',isChecked: false , value: '**MANUAL**'
    //   },
      {
        num:'009', id: 'de009',sub: 0,label: ' 009 Conversion rate, settlement ',isChecked: false , value: '**MANUAL**'
      },
      {
        num:'010',id: 'de010',sub: 0,label: ' 010 Conversion rate, cardholder billing ',isChecked: false , value: '**MANUAL**'
      },
      {
        num:'011', id: 'de011',sub: 0,label: ' 011 System Trace Audit Number(STAN) ',isChecked: false , value:'**SYSTEM**'
      },
      {
        num:'012',id: 'de012',sub: 0,label: ' 012 Local Transaction Time (hhmmss) ',isChecked: false , value:'**SYSTEM**'
      },
      {
        num:'013',id: 'de013',sub: 0,label: ' 013 Local Transaction Date (MMDD) ',isChecked: false , value:'**SYSTEM**'
      },
      {
        num:'014', id: 'de014',sub: 0,label: ' 014 Expiration date ',isChecked: false , value:'**CARD**'
      },
      {
        num:'015',id: 'de015',sub: 0,label: ' 015 Settlement date ',isChecked: false , value:'**SYSTEM**'
      },
      {
        num:'016',  id: 'de016',sub: 0,label: ' 016 Currency conversion date ',isChecked: false , value:'**MANUAL**'
      },
      {
        num:'017', id: 'de017',sub: 0,label: ' 017 Capture date ',isChecked: false , value:'**MANUAL**'
      },
      {
        num:'018',id: 'de018',sub: 0,label: ' 018 Merchant Category Code (MCC) ',isChecked: false , value:'**TERMINAL**'
      },
      {
        num:'019',id: 'de019',sub: 0,label: ' 019 Acquiring Institution (Country Code) ',isChecked: false , value: '**TERMINAL**'
      },
      {
        num:'020',id: 'de020',sub: 0,label: ' 020 PAN extended (country code) ',isChecked: false , value: '**MANUAL**'
      },
    //   {
    //     id: 'de021',label: ' 021 Forwarding institution (country code) ',isChecked: false , value: '**MANUAL**'
    //   },
      {
        num:'022', id: 'de022',sub: 0,label: ' 022 Point of Service Entry Mode ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'022.1',id: 'de022SF1', sub: 'de022', label: ' Subfield 1 POS Terminal PAN Entry Mode ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'022.2',id: 'de022SF2', sub: 'de022',label: ' Subfield 2 POS Terminal PIN Entry Mode ',isChecked: false, value: '**MANUAL**'
      },
      
      {
        num:'023',id: 'de023',sub: 0,label: ' 023 Application PAN sequence number ',isChecked: false , value: '**MANUAL**'
      },
    //   {
    //     id: 'de024',label: ' 024 Network International Identifier (NII) ',isChecked: false , value: '**MANUAL**'
    //   },
      {
        num:'025', id: 'de025',sub: 0,label: ' 025 Point of Service Condition Code ',isChecked: false , value: '**MANUAL**'
      },
      {
        num:'026',id: 'de026',sub: 0,label: ' 026 Point of service capture code ',isChecked: false , value: '**MANUAL**'
      },
    //   {
    //     id: 'de027',label: ' 027 Authorizing identification response length ',isChecked: false , value: '**MANUAL**'
    //   },
      {
        num:'028',id: 'de028',sub: 0,label: ' 028 Amount, transaction fee ',isChecked: false , value: '**MANUAL**'
      },
    //   {
    //     id: 'de029',label: ' 029 Amount, settlement fee ',isChecked: false , value: '**MANUAL**'
    //   },
    //   {
    //     id: 'de030',label: ' 030 Amount, transaction processing fee ',isChecked: false , value: '**MANUAL**'
    //   },
    //   {
    //     id: 'de031',label: ' 031 Amount, settlement processing fee ',isChecked: false , value: '**MANUAL**'
    //   },
      {
        num:'032',id: 'de032',sub: 0,label: ' 032 Acquiring Institution Identification Code ',isChecked: false, value: '**TERMINAL**'
      },
      {
        num:'033',id: 'de033',sub: 0,label: ' 033 Forwarding institution identification code ',isChecked: false , value: '**MANUAL**'
      },
      {
        num:'034',id: 'de034',sub: 0,label: ' 034 Primary account number, extended ',isChecked: false , value: '**MANUAL**'
      },
      {
        num:'035',id: 'de035',sub: 0,label: ' 035 Track 2 data ',isChecked: false , value: '**CARD**'
      },
    //   {
    //     id: 'de035SF1',label: ' Subfield 1-Start Sentinal ',isChecked: false , value: '**CARD**'
    //   },
    //   {
    //     id: 'de035SF2',label: ' Subfield 2-Primary Account Number (PAN) ',isChecked: false , value: '**CARD**'
    //   },
    //   {
    //     id: 'de035SF3',label: ' Subfield 3-Field Separator ',isChecked: false , value: '**CARD**'
    //   },
    //   {
    //     id: 'de035SF4',label: ' Subfield 4-Expiration Date ',isChecked: false , value: '**CARD**'
    //   },
    //   {
    //     id: 'de035SF5',label: ' Subfield 5-Extended Service Code ',isChecked: false , value: '**CARD**'
    //   },
    //   {
    //     id: 'de035SF6',label: ' Subfield 6-Discretionary Data ',isChecked: false , value: '**CARD**'
    //   },
    //   {
    //     id: 'de035SF7',label: ' Subfield 7-End Sentinal ',isChecked: false , value: '**CARD**'
    //   },
    //   {
    //     id: 'de035SF8',label: ' Subfield 8-Longitudinal Redundancy Check (LRC) ',isChecked: false , value: '**CARD**'
    //   },
    //   {
    //     id: 'de036',label: ' 036 Track 3 data ',isChecked: false , value: '**MANUAL**'
    //   },
      {
        num:'037',id: 'de037',sub: 0,label: ' 037 Retrieval Reference Number ',isChecked: false , value: '**SYSTEM**'
      },
      {
        num:'037.1',id: 'de037SF1',sub: 'de037',label: ' Subfield 1- Transaction Date and Initiator Discretionary Data ',isChecked: false , value: '**SYSTEM**'
      },
      {
        num:'037.2', id: 'de037SF2',sub: 'de037',label: ' Subfield 2-Terminal Transaction Number ',isChecked: false , value: '**SYSTEM**'
      },
      {
        num:'038',id: 'de038',sub: 0,label: ' 038 Authorization identification response ',isChecked: false , value: '**MANUAL**'
      },
      {
        num:'039',id: 'de039',sub: 0,label: ' 039 Response code ',isChecked: false , value: '**MANUAL**'
      },
    //   {
    //     id: 'de040',label: ' 040 Service restriction code ',isChecked: false , value: '**MANUAL**'
    //   },
      {
        num:'041',  id: 'de041',sub: 0,label: ' 041 Card acceptor terminal identification ',isChecked: false , value: '**TERMINAL**'
      },
      {
        num:'042',id: 'de042',sub: 0,label: ' 042 Card Acceptor Identification Code ',isChecked: false , value: '**TERMINAL**'
      },
      {
        num:'043',id: 'de043',sub: 0,label: ' 043 Card Acceptor Name / Location ',isChecked: false, value: '**TERMINAL**'
      },
      {
        num:'044', id: 'de044',sub: 0,label: ' 044 Additional response data ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'045',id: 'de045',sub: 0,label: ' 045 Track 1 data ',isChecked: false, value: '**MANUAL**'
      },
    
      {
        num:'046',id: 'de046',sub: 0,label: ' 046 Expanded Additional data ',isChecked: false, value: '**MANUAL**'
      },
    //   {
    //     id: 'de047',label: ' 047 Additional data (national) ',isChecked: false, value: '**MANUAL**'
    //   },
      {
        num:'048',id: 'de048',sub: 0,label: ' 048 Additional data ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'049',id: 'de049',sub: 0,label: ' 049 Currency Code, Transaction ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'050', id: 'de050',sub: 0,label: ' 050 Currency Code, settlement ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'051',  id: 'de051',sub: 0,label: ' 051 Currency Code, Cardholder Billing ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'052', id: 'de052',sub: 0,label: ' 052 Personal Identification Number data ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'053',  id: 'de053',sub: 0,label: ' 053 Security-Related Control Information ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'053.1', id: 'de053Usage2',sub: 'de053',label: ' 053, Usage 2- Security-Related Control Information ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'054', id: 'de054',sub: 0,label: ' 054 Additional amounts ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'055',  id: 'de055',sub: 0,label: ' 055 Integrated Circuit Card(ICC) System - Related Information ',isChecked: false, value: '**CARD**'
      },
      {
        num:'055.1', id: 'de055Usage1',sub: 'de055',label: ' 055, Usage 1- VSDC Chip Data ',isChecked: false, value: '**CARD**'
      },
      {
        num:'055.2', id: 'de055Usage2',sub: 'de055',label: ' 055 Usage 2- Chip Card Data ',isChecked: false, value: '**CARD**'
      },
      {
        num:'056', id: 'de056',sub: 0,label: ' 056 Customer Related Data ',isChecked: false, value: '**MANUAL**'
      },
    //   {
    //     id: 'de057',label: ' 057 Reserved for National Use ',isChecked: false, value: '**MANUAL**'
    //   },
    //   {
    //     id: 'de058',label: ' 058 Authorizing Agent Institution ID ',isChecked: false, value: '**MANUAL**'
    //   },
      {
        num:'059', id: 'de059',sub: 0,label: ' 059 National Point-of-Service Geographic Data ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'060', id: 'de060',sub: 0,label: ' 060 Additional POS Information ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'061',id: 'de061',sub: 0,label: ' 061 Other Amounts ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'062',id: 'de062',sub: 0,label: ' 062 Custom Payment Service Fields ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'062.1',id: 'de062SF0',sub: 'de062',label: ' 062.0-Field 62 Bitmap ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'062.2',id: 'de062SF1',sub: 'de062',label: ' 062.1-â€”Authorization Characteristics Indicator (Bitmap Format) ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'062.3',id: 'de062SF2',sub: 'de062',label: ' 062.2-Transaction Identifier (Bitmap Format) ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'062.4',id: 'de062SF3',sub: 'de062',label: ' 062.3-Validation Code (Bitmap Format) ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'062.5',id: 'de062SF4',sub: 'de062',label: ' 062.4-Market-Specific Data Identifier ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'062.6',id: 'de062SF5',sub: 'de062',label: ' 062.5-Duration ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'062.7', id: 'de062SF6',sub: 'de062',label: ' 062.6-Prestigious Property Indicator ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'062.8', id: 'de062SF7',sub: 'de062',label: ' 062.7-Purchase Identifier ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'062.9',id: 'de062SF8',sub: 'de062',label: ' 062.8-Auto Rental Check-Out Date, Lodging Check-In Date ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'062.10', id: 'de062SF9',sub: 'de062',label: ' 062.9-No Show Indicator ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'062.11',id: 'de062SF10',sub: 'de062',label: ' 062.10-Extra Charges ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'062.12', id: 'de062SF11',sub: 'de062',label: ' 062.11-Multiple Clearing Sequence Number ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'062.13',id: 'de062SF12',sub: 'de062',label: ' 062.12-Multiple Clearing Sequence Count ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'062.14',id: 'de062SF13',sub: 'de062',label: ' 062.13-Restricted Ticket Indicator ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'062.15',id: 'de062SF14',sub: 'de062',label: ' 062.14-Total Amount Authorized ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'062.16', id: 'de062SF15',sub: 'de062',label: ' 062.15-Requested Payment Service ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'062.17',id: 'de062SF16',sub: 'de062',label: ' 062.16-Chargeback Rights Indicator (CRI) ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'062.18',id: 'de062SF17',sub: 'de062',label: ' 062.17-Gateway Transaction Identifier (Bitmap Format) ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'062.19', id: 'de062SF18',sub: 'de062',label: ' 062.18-Excluded Transaction Identifier Reason Code ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'062.20',id: 'de062SF19',sub: 'de062',label: ' 062.19-Electronic Commerce Goods Indicator ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'062.21', id: 'de062SF20',sub: 'de062',label: ' 062.20-Merchant Verification Value ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'062.22', id: 'de062SF21',sub: 'de062',label: ' 062.21-â€”Online Risk Assessment Risk Score and Reason Codes ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'062.23', id: 'de062SF22',sub: 'de062',label: ' 062.22-Online Risk Assessment Condition Codes ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'062.24',id: 'de062SF23',sub: 'de062',label: ' 062.23-Product ID ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'062.25', id: 'de062SF24',sub: 'de062',label: ' 062.24-Program Identifier ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'060.26', id: 'de062SF25',sub: 'de062',label: ' 062.25-Spend Qualified Indicator ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'062.27',id: 'de062SF26',sub: 'de062',label: ' 062.26-Account Status ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'063', id: 'de063',sub: 0, label: ' 063 SMS Private-Use Fields ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'063.1',id: 'de063SF0',sub: 'de063',label: ' 063.0-Field 63 Bitmap ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'063.2',id: 'de063SF1',sub: 'de063',label: ' 063.1 Network Identification Code ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'063.3', id: 'de063SF2',sub: 'de063',label: ' 063.2 Time (Preauth Time Limit) ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'063.4', id: 'de063SF3',sub: 'de063',label: ' 063.3 Message Reason Code ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'063.5', id: 'de063SF4',sub: 'de063',label: ' 063.4 STIP/Switch Reason Code ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'063.6', id: 'de063SF6',sub: 'de063',label: ' 063.6 Chargeback Reduction/BASE ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'063.7', id: 'de063SF8',sub: 'de063',label: " 063.8 Visa Acquirer's Business ID = ",isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'063.8',  id: 'de063SF9',sub: 'de063',label: ' 063.9 Fraud Data ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'063.9',  id: 'de063SF10',sub: 'de063',label: ' 063.10 Gateway Merchant Data ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'063.10',id: 'de063SF11',sub: 'de063',label: ' 063.11 Reimbursement Attribute ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'063.11',  id: 'de063SF12',sub: 'de063',label: ' 063.12 Sharing Group Code ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'063.12', id: 'de063SF13',sub: 'de063',label: ' 063.13 Decimal Position Indicator ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'063.13', id: 'de063SF14',sub: 'de063',label: ' 063.14 Issuer Currency Conversion ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'063.14',id: 'de063SF15',sub: 'de063',label: ' 063.15 Reserved ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'063.15', id: 'de063SF18',sub: 'de063',label: ' 063.18 Merchant Volume Indicator ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'063.16', id: 'de063SF19',sub: 'de063',label: ' 063.19 Fee Program Indicator ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'063.17', id: 'de063SF21',sub: 'de063',label: ' 063.21 Charge Indicator ',isChecked: false, value: '**MANUAL**'
      },
	  {
      num:'066', id: 'de066',sub: 0,label: ' 066 Settlement Code ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'068',id: 'de068',sub: 0,label: ' 068 Receiving Institution Country Code ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'069', id: 'de069',sub: 0,label: ' 069 Settlement Institution Country Code ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'070', id: 'de070',sub: 0,label: ' 070 Network Management Information Code ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'073', id: 'de073',sub: 0,label: ' 073 Date,Action ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'074', id: 'de074',sub: 0,label: ' 074 Credits,Number ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'075', id: 'de075',sub: 0,label: ' 075 Credits,Reversal Number ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'076', id: 'de076',sub: 0,label: ' 076 Debits,Number ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'077', id: 'de077',sub: 0,label: ' 077 Debits,Reversal Number ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'086',id: 'de086',sub: 0,label: ' 086 Credits,Amount ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'087',id: 'de087',sub: 0,label: ' 087 Credits,Reversal Amount ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'088',id: 'de088',sub: 0,label: ' 088 Debits,Amount ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'089',id: 'de089',sub: 0,label: ' 089 Debits,Reversal Amount ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'090', id: 'de090',sub: 0,label: ' 090 Original Data Elements ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'091',id: 'de091',sub: 0,label: ' 091 File Update Code ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'092', id: 'de092',sub: 0,label: ' 092 File Security Code ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'095',id: 'de095',sub: 0,label: ' 095 Replacement Amounts ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'096', id: 'de096',sub: 0,label: ' 096 Message Security Code ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'097',id: 'de097',sub: 0,label: ' 097 Amount, Net Settlement ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'099',id: 'de099',sub: 0,label: ' 099 Settlement Institution Identification Code ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'100', id: 'de100',sub: 0,label: ' 100 Receiving Institution Identification Code ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'101',id: 'de101',sub: 0,label: ' 101 File Name ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'102',id: 'de102',sub: 0,label: ' 102 Account Identification 1 ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'103',id: 'de103',sub: 0,label: ' 103 Account Identification 2 ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'104', id: 'de104',sub: 0,label: ' 104 Transaction Description & Transaction-Specific Data ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'104.1',id: 'de104Usage2',sub: 'de104',label: ' 104 Usage 2-Transaction-Specific Data ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'105',id: 'de105',sub: 0,label: ' 105 Double Length deS Key (Triple deS) ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'110', id: 'de110',sub: 0,label: ' 110 Encryption Data (TLV Format) ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'115', id: 'de115',sub: 0,label: ' 115 Additional Trace Data ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'116', id: 'de116',sub: 0,label: ' 116 Card Issuer reference Data ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'117', id: 'de117',sub: 0,label: ' 117 National Use ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'118',id: 'de118',sub: 0,label: ' 118 Intra-Country Data ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'119', id: 'de119',sub: 0,label: ' 119 Settlement Service Data ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'120',id: 'de120',sub: 0,label: ' 120 Auxiliary Transaction Data (TLV Format) ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'123',id: 'de123',sub: 0,label: ' 123 Verification Data ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'123.1', id: 'de123a',sub: 'de123',label: ' 123 Verification Data (Fixed Format) ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'123.2', id: 'de123Usage2',sub: 'de123',label: ' 123 Usage 2- Verification & Token Data (TLV Frormat)',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'125',id: 'de125',sub: 0,label: ' 125 Support Information ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'125.1',id: 'de125Usage2',sub: 'de125',label: ' 125 Usage 2-Supporting Information (TLV Format)',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'125.2', id: 'de125Usage4',sub: 'de125',label: ' 125 Usage 4-VCRFS, Optional Tex ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'125.3', id: 'de125Usage5',sub: 'de125',label: ' 125 Usage 5-Additional Fraud Information ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'126',id: 'de126',sub: 0,label: ' 126 Visa Private- Use Fields ',isChecked: false, value: '**MANUAL**'
      },
      {
        num:'127',id: 'de127',sub: 0,label: ' 127 File Record(s): Action and Data ',isChecked: false, value: '**MANUAL**'
      },
  ];

  messageTemplate0200=[{
    id: 'DE001',label: ' 001 Secondary Bitmap = ',isChecked: true , value:'0010001000 0100000000 0000000100 0100000010'
  },
  {
    id: 'DE002',label: ' 002 Primary account number (PAN) = ',isChecked: true , value: 'card'
  },
  {
    id: 'DE003',label: ' 003 Processing code = ',isChecked: true , value:'000000'
  },
  {
    id: 'DE004',label: ' 004 Amount, transaction = ',isChecked: true , value: '000000001000'
  },
  {
    id: 'DE007',label: ' 007 Transmission date & time = ',isChecked: true, value: 'system'
  },
  {
    id: 'DE011',label: ' 011 System Trace Audit Number(STAN) = ',isChecked: true , value:'system'
  },
  {
    id: 'DE012',label: ' 012 Local Transaction Time (hhmmss) = ',isChecked: true , value:'system'
  },
  {
    id: 'DE013',label: ' 013 Local Transaction Date (MMDD) = ',isChecked: true , value:'system'
  },
  {
    id: 'DE018',label: ' 018 Merchant Category Code (MCC) = ',isChecked: true , value:'5411'
  },
  {
    id: 'DE019',label: ' 019 Acquiring Institution (Country Code) = ',isChecked: true , value: '356'
  },
  {
    id: 'DE022',label: ' 022 Point of Service Entry Mode = ',isChecked: true, value: '000'
  },
  {
    id: 'DE025',label: ' 025 Point of Service Condition Code = ',isChecked: true , value: '00'
  },
  {
    id: 'DE032',label: ' 032 Acquiring Institution Identification Code = ',isChecked: true, value: 'card'
  },
  {
    id: 'DE037',label: ' 037 Retrieval Reference Number = ',isChecked: true , value: 'system'
  },
  {
    id: 'DE042',label: ' 042 Card Acceptor Identification Code = ',isChecked: true , value: 'system'
  },
  {
    id: 'DE043',label: ' 043 Card Acceptor Name / Location = ',isChecked: true, value: 'system'
  },
  {
    id: 'DE049',label: ' 049 Currency Code, Transaction = ',isChecked: true, value: '356'
  },
  {
    id: 'DE063',label: ' 063 Network Data = ',isChecked: true, value: 'card'
  }


];

messageTemplate0800=[{
  id: 'DE001',label: ' 001 Secondary Bitmap = ',isChecked: true ,value:'0010001000 0100000000 0000000100 0100000010'
},{
  id: 'DE007',label: ' 007 Transmission date & time = ',isChecked: true , value: 'system'
},
{
  id: 'DE011',label: ' 011 System Trace Audit Number(STAN) = ',isChecked: true , value:'system'
},
{
  id: 'DE070',label: ' 070 Network Management Information Code = ',isChecked: true , value:'system'
}

]

  isReadonly=false;
  title='Edit TestScript';

  btn =0;

  cardId= "";

  model :any ={};

  opt =0;

  
  Transaction = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.Transaction.hasError('required')) {
      return 'You must enter a value';
    }
  }
  selected = 'option2';
  formControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  //values: Field[];

  constructor(public dialog: MatDialog,private api: ApiService,private route: ActivatedRoute, private router: Router,private notifyService : NotificationService) 
  {
    this.userDetails.userId = sessionStorage.getItem('id');
    this.userDetails.userName = sessionStorage.getItem('userName');
  }
  

  // openDialog() {
  //   this.showtransaction=!this.showtransaction;
  // }
  openDialog1() {
    this.showmessage=!this.showmessage;
  }
  ngOnInit(): void {
   // this.model.MTI="0200";
console.log("this.data.pickedMsg",this.pickedMsg);
    this.fetchSelectedItems()
    this.fetchCheckedIDs()
    this.fetchSelectedItems1()
    this.fetchCheckedIDs1()
    this.route.params.subscribe((params) => {
      
     
      
      this.opt = params.opt;
      if(this.opt ==1){
        this.transId = params.id;
      if(this.transId && this.transId!=""){
        this.api.getTransactionDetail(this.transId).subscribe((res) => {
          //this.projectId = res.pr;
          this.addTransaction=true;
          this.showNone= false;
         this.transTitle = "Edit Transaction";
          console.log('params', params);
          this.model = res;
          if (Object.keys(this.model).length !== 0 && this.opt == 1) {
            console.log(' this.Project', this.model);
            this.title = 'Edit Transaction';
            this.btn = 1;
            this.model = res;
            console.log("res",res)
            this.model.schemaID = res['schemaID'];
            this.transMsg = res['msgReqID'];
            this.getTransData(this.model.schemaID);
            this.model.transID = res['transID'];
            
            this.addEditMsgList(this.schemaData.message);
            //this.getTransData(this.model.schemaID);
            console.log("newArr",this.newArr);
           /* if(res['msgIB']!=null && res['msgOB']!=null){
              this.schemaData.message = JSON.parse(res['msgIB'] + res['msgOB']);
            }else if(res['msgIB']!=null && res['msgOB']==null){
              this.schemaData['message'] = JSON.parse(res['msgIB']);
            }else if(res['msgIB']==null && res['msgOB']!=null){
              this.schemaData.message = JSON.parse(res['msgOB']);
            }else{
              this.schemaData ={};
            }*/
           /* let scheval = this.schemaData.message;
            scheval.forEach((scheval) => {
              if((scheval.msgId ==res['msgIB']) ){
                var val = res['msgIB'];
//                this.schemaData.message[res['msgIB']].push({ isChecked: 1 });
scheval.message.val['isChecked'] =  1 ;
                console.log(scheval);

              }

              if( (this.schemaData.message.msgId ==res['msgOB'])){
                //                this.schemaData.message[res['msgIB']].push({ isChecked: 1 });
                var val = res['msgOB'];
                this.schemaData.message.val['isChecked'] =  1 ;
                                console.log(this.schemaData.message);
                
                              }
              
              console.log(this.schemaData.message);
            });*/
            for (var index = 0; index < this.schemaData.transaction.length; ++index) {

              var schema = this.schemaData.transaction[index];
             
              if(schema.msgId == res['msgIB']){
                schema.isChecked = true;
                break;
              }else if(schema.msgId == res['msgOB']){
                schema.isChecked = true;
                break;
              }
             }
            
            console.log("respnse", schema)
            
            console.log("res",res)
           
            //this.model.New = "Transaction";
          } else {
          }
        });
       
        
      }
    }else{
      this.msgId = params.id;
      if(this.msgId && this.msgId!=""){
        this.msgBtn =1;
        this.api.getMessageDetail(this.msgId).subscribe((res) => {
          //this.projectId = res.pr;
          
         this.msgTitle = "Edit Message";
         this.showNone= false;
         this.addmessage = true;
          console.log('params', params);
          this.model = res;
          if (Object.keys(this.model).length !== 0 && this.opt == 1) {
            console.log(' this.Project', this.model);
            
            this.btn = 1;
            this.model = res;
            this.model.schemaID = res['schemaID'];
            this.model.msgId = res['msgId'];
            //this.getTransData(this.model.schemaID);
            console.log("schema",this.schemaData);
           
            

   
          }
          this.getTransData(this.model.schemaID);
        });
    }
  }
      
    });
  }
  changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked
    });
  }

  fetchCheckedIDs() {
    this.checkedIDs = []
    this.checkboxesDataList.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs.push(value.id);
      }
    });
  }
  selectTransaction(id) {
    //this.fetchSelectedItems1();
    console.log("id", id)
    this.checkedIDs = []
    if (id.isChecked) {
      this.checkedIDs.push(id);
    }
    console.log("this.selectedItemsList1", this.checkedIDs);
  }

  fetchSelectedItems1() {
    this.selectedItemsList1 = this.checkboxesDataList1.filter((value, index) => {
      return value.isChecked
    });
  }

  fetchCheckedIDs1() {
    this.checkedIDs1 = []
    this.checkboxesDataList1.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs1.push(value.id);
      }
    });
  }

  onSubmit(){
    console.log("tyyy")
console.log(this.model);
this.model.createdBy = this.userDetails.userId;

console.log("this.selectedItemsList1",this.selectedMsg);
console.log("post param",this.model);
if (this.msgBtn == 1) {
 
  this.route.params.subscribe((params) => {
    this.api.updateTemplate(this.model);
    this.notifyService.showSuccess(
      'Message Updated successfully !!',
      'Edit-Message'
    );
    this.router.navigate(['/Edit-Script']);
  });
} else {
  this.route.params.subscribe((params) => {
    this.api.addTemplate(this.model);
    this.notifyService.showSuccess(
      'Message added successfully !!',
      'Add-Message'
    );
    this.router.navigate(['/Edit-Script']);
  });
  
}

  }
  toggle() {
    this.addmessage = !this.addmessage;

    this.showNone= !this.showNone;
    
  }
  toggle1(){
    this.addTransaction=!this.addTransaction;
    this.showNone= !this.showNone;
  }

  addDataElements(){
    console.log("testing dd button")
    //this.showDE= !this.showDE;
    this.CheckedDataElements=true;
    this.AllDataElements= true;
    let dialogRef = this.dialog.open(this.callMessageDialog);
    dialogRef.afterClosed().subscribe(result => {
        // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
        if (result !== undefined) {
            if (result === 'yes') {
                // TODO: Replace the following line with your code.
                console.log('User clicked yes.');
            } else if (result === 'no') {
                // TODO: Replace the following line with your code.
                console.log('User clicked no.');
            }
        }
    })
    //this.showNone= !this.showNone;
  }
  addMessages(){
    /*this.test1 =[];
    this.test[0]={"id":"DE001", "value" : "text1"};
    this.test[1]={"id":"DE002", "value" : "text2"};
    //
    this.test1[1] = this.test1.push(this.test);*/
   /* this.test1[0]['id'] = id;
    this.test1[0]['value'] = val;
    this.test1[1]['id'] ='DE002';
    this.test1[1]['value'] = val;
    console.log("test",this.test1)
    this.test.push(this.test1);*/
    this.showMsg=!this.showMsg;
  }
  onChange(value) {
    console.log(value,"value")
    if(value=="Message"){
      
      if(this.model.schemaID  && this.model.schemaID !=''){
        this.api.getTemplateMsg(this.model.schemaID ).subscribe(res => {
          this.templateMessage = res;
          console.log("res",this.templateMessage)
        });
      }
     
this.addmessage=!this.addmessage;

this.showNone= false;
// console.log(this.showtransaction);
//       console.log(this.showmessage);
//       console.log(this.showNone);
//       console.log(this.addmessage);
    }
    else{
     
      this.addTransaction=!this.addTransaction;

this.showNone= false;
    }
    
}

onChangeTemplate(value) {
    
  /*if(value=="messageTemplate0200"){
    this.isReadonly = !this.isReadonly;    
    this.showmessageTemplate0200=true;
    this.showmessageTemplate0800=false;
    this.showNone= false;

  }
  else if(value=="messageTemplate0800"){
    this.isReadonly = !this.isReadonly;
    this.showmessageTemplate0200=false;
    this.showmessageTemplate0800=true;
    this.showNone= false;
  }*/
  this.isReadonly = !this.isReadonly;    
  this.showmessageTemplate0200=true;
  this.showmessageTemplate0800=false;
  this.showNone= false;
  console.log("value",value);
  
  this.api.getTemplateDataById(value).subscribe(res => {
    this.templateDataElement = res;
    var arr=[];
          //console.log("schemaMsg",schemaMsg)
          this.seleMsg =[];
          arr = res['dataElementLink'];
          this.selectedInMsg = res['dataElementLink'];
         // console.log("schemaMsg",this.schemaMsg,this.transMsg)
          var l= arr.length;
          var s =this.DataElements.length;
          console.log("s,s",s,this.DataElements)
          console.log("l",l,arr)
          var i=0;
          var k =this.newArr.length;
          var status = 0;
          if(l >0){
            this.CheckedDataElements=true;
            for(let i=0;i<l;i++){
      console.log("i",i)
            
              for(let a=0;a<s; a++){
                console.log("arr[a]['id']",this.DataElements[a]['id'])
                if(this.DataElements[a]['id'] == arr[i] && (arr !=null)){ 
                  console.log("val",k, this.DataElements[a])
                  console.log("jjjj",arr[i])
                  var txt =this.DataElements[a]['id'];
                  this.DataElements[a]['dataElement'] = res[arr[i]];
                   this.model[txt] = res[arr[i]];
                 
                 this.newArr[i] =this.DataElements[a] ;
               console.log("this.model",this.model)
                }
                
                }
               this.result= this.newArr; 
              console.log("this.newArr",this.newArr)
              }
           
              
        }
    
  /*  this.templateDataElement.forEach(function (val) {
      console.log("templateDataElement", value)
    });*/
    console.log("templateDataElement", res)
    console.log(this.templateDataElement['de001'])
    
    for(var i=1;i<=128;i++){
      
     console.log("i",i)
      
        if(i<10){ 
         var j='de00'+i;
        // this.templateDataElement.value[j] =this.templateDataElement.j;
        }
        else if(i>=10 && i<100){
          var j='de0'+i;
         // this.templateDataElement.value[j] =this.templateDataElement.j;
        }else{
          var j='de'+i;
         
        }
     
        //this.dataArray[j] =this.templateDataElement[j];
        this.dataArray['id'] =j;
        this.dataArray['name'] =this.templateDataElement[j];
        //console.log("dataArray", this.dataArray);
        
     // console.log(" this.templateDataElement.value", this.templateDataElement)
     this.templateDataElement += this.dataArray;
    }
    console.log("dataArray", this.dataArray);
    
    console.log("this.templateDataElement",this.templateDataElement) 
   
    
  });
        
  
  
}
// openMessage(){
//   this.router.navigate(['./message']);
// }


/** API for Schema based transaction and message list */

getTransData(id){
    this.model.schemaID = id;
  this.api.getTransData(id).subscribe(res => {
    this.schemaData = res;
    this.schemaMsg = res['message'];
    console.log("this.schemaMsg",this.schemaMsg);
    
    
  });
      
}

onTransSubmit(){
  this.model.msgOB = null;
  this.model.msgIB = null;
console.log("this.selectedInMsg",this.selectedInMsg);
console.log("this.selectedOutMsg",this.selectedOutMsg);
this.model.msgReqID =this.selectedInMsg;
/*if( this.selectedInMsg.length >0 ){
  console.log("this.model.msgOB",this.model.msgIB)
  //this.model.msgIB =  this.selectedInMsg.toString();
  this.model.msgIB =  this.selectedInMsg;
}
if( this.selectedOutMsg.length >0 ){
  console.log("this.model.msgOB",this.model.msgOB)
  //this.model.msgOB =  this.selectedOutMsg.toString();
  this.model.msgOB =  this.selectedOutMsg;
}*/


this.model.createdBy = this.userDetails.userId;

console.log("this.selectedItemsList1",this.selectedMsg);
console.log("post param",this.model);
if (this.btn == 1) {
 
  this.route.params.subscribe((params) => {
    this.api.editTransaction(this.model);
    this.notifyService.showSuccess(
      'Transaction Updated successfully !!',
      'Edit-Transaction'
    );
    this.router.navigate(['/Edit-Script']);
  });
} else {
  this.route.params.subscribe((params) => {
    this.api.addTransaction(this.model);
    this.notifyService.showSuccess(
      'Transaction added successfully !!',
      'Add-Transaction'
    );
    this.router.navigate(['/Edit-Script']);
  });
  
}
}

callAPI() {
  let dialogRef = this.dialog.open(this.callAPIDialog);
  dialogRef.afterClosed().subscribe(result => {
      // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
      if (result !== undefined) {
          if (result === 'yes') {
              // TODO: Replace the following line with your code.
              console.log('User clicked yes.');
          } else if (result === 'no') {
              // TODO: Replace the following line with your code.
              console.log('User clicked no.');
          }
      }
  })
}

getCheckboxValues(ev,data) {


  if(ev.target.checked){
    // Pushing the object into array
   // this.newArray.push(obj);
   //if(msgType && msgType!='' && msgType=='IN'){
    //this.newArray.push(data);
    this.selectedInMsg.push(data);
    
    console.log("res",this.selectedInMsg)
   /*}else{
    this.selectedOutMsg.push(data);
   }
    
    
    

  }else {
   /* let removeIndex = this.newArray.findIndex(itm => itm.msgId===data);

    if(removeIndex !== -1)
      this.newArray.splice(removeIndex,1);*/
     

      /*if(msgType && msgType!='' && msgType=='IN'){
        const index: number = this.selectedInMsg.indexOf(data);
        if (index !== -1) {
            this.selectedInMsg.splice(index, 1);
        }   
      }else{
        const index: number = this.selectedOutMsg.indexOf(data);
        if (index !== -1) {
            this.selectedOutMsg.splice(index, 1);
        }   
      }*/
  }else{
   /* console.log("data",data)
    this.selectedInMsg.splice(data, 1);
    console.log("data",this.selectedInMsg)*/
  
      this.selectedInMsg.forEach((value, index) => {
     
        this.selectedInMsg.splice(index,1)
   })
  }

  //Duplicates the obj if we uncheck it
  //How to remove the value from array if we uncheck it
  console.log(this.selectedInMsg);
  console.log(this.selectedOutMsg);
}
addEditMsgList(schemaMsg){
  var arr=[];
  console.log("schemaMsg",schemaMsg)
  this.seleMsg =[];
  arr = this.schemaData.message;
  console.log("schemaMsg",this.schemaMsg,this.transMsg)
  var l= this.transMsg.length;
  var s =this.schemaData.message.length;
  console.log("s,s",s, this.selectedMsg)
  console.log("l",l,this.transMsg)
  var i=0;
  var k =this.newArr.length;
  var status = 0;
  if(l >0){
   
      for(let i=0;i<l;i++){
console.log("i",i)
      
        for(let a=0;a<s; a++){
          console.log("arr[a]['msgId']",this.schemaData.message[a]['msgId'])
          if(this.schemaData.message[a]['msgId'] == this.transMsg[i]){ 
            console.log("val",k, this.schemaData.message[a])
            console.log("jjjj",this.transMsg[i])
           
           this.newArr[i] =this.schemaData.message[a] ;
         
          }
          
          }
          
        
        }
       /* this.transMsg.forEach((value, index) => {
          console.log("value",value)
          this.schemaData.message.splice(value,1);
          console.log("value",this.schemaData.message)
        });*/
        
            //console.log("select vale", this.schemaData.message)
        
  }
 

}

addmsgList(){
  //return this.countries.find(c => c.id === id);
  var arr=[];
  console.log("schemaMsg",this.schemaMsg)
  this.seleMsg =[];
  arr = this.schemaMsg;
  console.log("schemaMsg",this.schemaMsg)
  var l= this.selectedInMsg.length;
  var s =this.schemaMsg.length;
  console.log("s,s",s)
  console.log("l",l)
  var i=0;
  var k =this.newArr.length;
  var status = 0;
  if(l >0){
    //this.selectedInMsg.forEach(function (val) {
      //this.pickedMsg = this.schemaData.message.find(c => c.id === value);
      //let filterResult: any = this.schemaMsg.filter(u => u.msgId == value);
      for(let i=0;i<l;i++){
console.log("i",i)
      
        for(let a=0;a<s; a++){
          console.log("arr[a]['msgId']",arr[a]['msgId'])
          if(arr[a]['msgId'] == this.selectedInMsg[i]){ 
            console.log("val",k, arr[a])
            console.log("jjjj",this.selectedInMsg[i])
           //this.seleMsg.push(arr[a]);
           /*newArr['msgId'] = arr[a]['msgId'];
           newArr['msgName']= arr[a]['msgName'];
           newArr['schemaID'] = arr[a]['schemaID'];*/
           //this.seleMsg.push({"msgId": arr[a]['msgId'],"msgName":arr[a]['msgName'],"schemaID":arr[a]['schemaID']});
           //Array.prototype.push.apply(this.seleMsg,{"msgId": arr[a]['msgId'],"msgName":arr[a]['msgName'],"schemaID":arr[a]['schemaID']});
           

           // newArr[k].push(arr[a] ) ; 
           this.newArr[i] =arr[a] ;
           
            //k+1;
            //this.seleMsg.push(newArr);
          }
          
          }
          
         /* arr.forEach((value, index) => {
            console.log("this.sc",arr);
            console.log("val",value)
            console.log("cv",val)
            if (value.msgId == val) {
              console.log("if")
             //this.seleMsg.push({"msgId":value.msgId,"msgName":value.msgName,"schemaID":value.schemaID});
              this.seleMsg[k]['msgId'] = value.msgId;
              this.seleMsg[k]['msgName'] = value.msgName;
              this.seleMsg[k]['schemaID'] = value.schemaID;
              console.log("selemsg",this.seleMsg);
              k++;
              //this.seleMsg.push(Object.assign({},value));
              console.log("selemsg",this.seleMsg)
            }else{
              console.log("else")
            }
          });*/
        }
        this.selectedInMsg.forEach((value, index) => {
          console.log("value",value)
          this.schemaData.message.splice(value,1);
          console.log("value",this.schemaData.message)
        });
        
            console.log("select vale", this.schemaData.message)
        //console.log("selemsg",this.seleMsg)
     /* var index = this.schemaMsg.findIndex(function(item, i){
        return item.name === value
      });
      
      console.log(index);*/
     /* console.log("rshema", value)
      console.log("arr['msgId']",arr[0])*/
      
      /*this.schemaMsg.forEach(function (schemaMsg) {
        console.log("log",schemaMsg)
        if(schemaMsg){

        }
      });*/
      //console.log("vl",value)
     // console.log("value",this.schemaMsg[0]['msgId']);
      //this.schemaMsg.splice(value, 1);
      
      //console.log("schemaMsg",this.schemaMsg);
    //}); 
    //console.log("picked",this.pickedMsg)
  }
  this.CheckedDataElements=true;
  this.AllDataElements=false;
  this.result = (this.schemaData.message.filter(item =>
  JSON.stringify(this.selectedItemsList).includes(JSON.stringify(item))
));
this.schemaData.message= (this.schemaData.message.filter(item =>
  !JSON.stringify(this.result).includes(JSON.stringify(item))
));
 /* element.optionimages.forEach((element) => {
    obj.sliderImages.push({ image: URL + element[0] });
    console.log(obj);
  }*/
}
/*var intersect = function (arr1, arr2) {
  var intersect = [];
  _.each(arr1, function (a) {
      _.each(arr2, function (b) {
          if (compare(a, b))
              intersect.push(a);
      });
  });

  return intersect;
};*/

callRemove(id){
console.log("id",id);
console.log("newArr",this.newArr)

this.newArr= (this.newArr.filter(item =>
  !JSON.stringify(id).includes(JSON.stringify(item))
));
}
openDialog(): void {
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    width: '250px',
   // data: {name: this.name, animal: this.animal}
   data : this.schemaData.message
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    //this.animal = result;
  });
}

}



@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  

  selectedMsg = [];
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  getCheckboxValues(ev,msg) {


    if(ev.target.checked){
     
      this.selectedMsg.push(msg);
       
      
  
        
    }
    this.data.pickedMsg = this.selectedMsg;
     
    //Duplicates the obj if we uncheck it
    //How to remove the value from array if we uncheck it
    console.log(this.selectedMsg);
  }

}