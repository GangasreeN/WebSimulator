import { Component, OnInit , Inject, ViewChild, TemplateRef} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService} from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
//import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
//import { MessageTemplates } from '../messagetemplates';
import {NgForm} from '@angular/forms';
import {Location} from '@angular/common';


interface Field {
  name: string;
}

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.css']
})
export class AddTemplateComponent implements OnInit {
  @ViewChild('callAPIDialog', {static: false}) callAPIDialog: TemplateRef<any>;
  form: FormGroup;
  title ='Add Template';
  button ='ADD';
  btn = 0;
  userid ='';
  model: any = {};
  opt = 0;
  seleMsg = [
    { 
        
    }
  ];
  newArr : Array<object> = [];

  public dataEle: any[] = [{
    dataElement: '',
  }];
  isReadonly=false;
  public showde:boolean= false;
  public CheckedDataElements:boolean=false;
  public AllDataElements:boolean=false;
  selectedItemsList = [];
  checkedIDs = [];
  result:any={};
  checkedMessage:any ={};
  userDetails = {
    userId: '',
    userName: '',
    empId: '',
  };
  qtd:any[] = []; 
  selectedInMsg = []; 
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
  msgId= "";
  templateInd=1;

  constructor(private fb: FormBuilder,

    private route: ActivatedRoute,  private api: ApiService,private _location: Location,

    private notifyService : NotificationService,private router: Router,public dialog: MatDialog)

     {

      this.userDetails.userId = sessionStorage.getItem('id');

      this.userDetails.userName = sessionStorage.getItem('userName');

      }
  ngOnInit() {
    this.model.templateInd=1;
    this.route.params.subscribe(params => {

      this.msgId = params.id;
      this.opt = params.opt;
      if(this.opt==1){
      this.api.getTemplateDataById(this.msgId).subscribe(res => {

        console.log("params",params);

        this.model = res;

        if(Object.keys(this.model).length !== 0 && this.opt==1){

          console.log(" this.Project", this.model);
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
                if(this.DataElements[a]['id'] == arr[i]){ 
                  console.log("val",k, this.DataElements[a])
                  console.log("jjjj",arr[i])
                  this.DataElements[a]['dataElement'] = res[arr[i]]
                 
                 this.newArr[i] =this.DataElements[a] ;
               
                }
                
                }
               this.result= this.newArr; 
              console.log("this.newArr",this.newArr)
              }
           
              
        }

          //this.isReadonly = !this.isReadonly;

          this.title = "Edit Template";
          this.button = "Update";

          this.btn=1;

          this.model = res;
          this.msgId = res['msgId'];

        }else{}

    });
  }
  });

    this.fetchSelectedItems()
    this.fetchCheckedIDs()
  }


  openDialog() {
    //this.dialog.open(DialogComponent);
  }
  changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.DataElements.filter((value, index) => {
      return value.isChecked
    });
    //this.checkedMessage=this.selectedItemsList.concat(this.checkedMessage);
    console.log("Selected ItemsList",this.selectedItemsList)
  }

  fetchCheckedIDs() {
    this.checkedIDs = []
    this.DataElements.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs.push(value.id);
      }
    });
    console.log("checked DataElements",this.checkedIDs);
  //   this.checkedMessage=Object.assign(this.result,this.selectedItemsList)
  // console.log(this.checkedMessage);
  }
  onSubmit(f: NgForm){
console.log(this.model);
console.log(this.result)
//console.log("qtd",this.form.value)
console.log('Your form data : ', f.value);
console.log("form",f.value['de001'])
console.log("this.selectedInMsg",this.selectedInMsg)
/*for(var i=0;i<this.result.length;i++){
  var de = this.result[i]['id'];
  this.model.de = 
}*/
this.model =  f.value;
this.model.dataElementLink =this.selectedInMsg;
this.model.userId = this.userDetails.userId;
console.log("model val", this.model);
if(this.btn ==1){

this.model.userId = this.userDetails.userId;

this.model.msgId = this.msgId;

this.route.params.subscribe(params => {

this.api.updateTemplate(this.model);

this.notifyService.showSuccess("Template Updated successfully !!",'Edit Template');

this.router.navigate(['/Template-Configuration']);

});

}else{

this.route.params.subscribe(params => {

this.api.addTemplate(this.model);

this.notifyService.showSuccess("Template added successfully !!",'Add Template');

this.router.navigate(['/Template-Configuration']);

});


}
  }

  addDataElements(){
    this.CheckedDataElements=true;
    this.AllDataElements= true;
    let dialogRef = this.dialog.open(this.callAPIDialog);
  dialogRef.afterClosed().subscribe(result => {
      // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
      if (result !== undefined) {
          if (result === 'Ok') {
      //         // TODO: Replace the following line with your code.
              console.log('User clicked yes.');
         } else if (result === "Cancel") {
      //         // TODO: Replace the following line with your code.
              console.log('User clicked no.');
          }
      }
  })
  }
  intersection(){
    this.CheckedDataElements=true;
    this.AllDataElements=false;
    this.result = (this.DataElements.filter(item =>
    JSON.stringify(this.selectedItemsList).includes(JSON.stringify(item))
  ));
  this.DataElements= (this.DataElements.filter(item =>
    !JSON.stringify(this.result).includes(JSON.stringify(item))
  ));
  //this.result=this.result.concat(this.checkedMessage);
  
  console.log("Intersecting values",this.result);
  console.log("Remaining Data elements after selecting from list",this.DataElements)
  }


  

  getCheckboxValues(ev,data) {


    if(ev.target.checked){
      
      this.selectedInMsg.push(data);
      
      console.log("res",this.selectedInMsg)
     
    }else{
     
    
        this.selectedInMsg.forEach((value, index) => {
       
          this.selectedInMsg.splice(index,1)
     })
    }
  
    //Duplicates the obj if we uncheck it
    //How to remove the value from array if we uncheck it
    console.log(this.selectedInMsg);
  }



  removeDE(id){
    console.log("id",id);
    console.log("id",this.result);
    
    this.result = (this.DataElements.filter(item =>
      JSON.stringify(id).includes(JSON.stringify(item))
    ));
    console.log("id",this.result);
    }
    

}
