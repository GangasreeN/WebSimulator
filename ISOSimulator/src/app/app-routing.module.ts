import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { TaskManageComponent } from './task-manage/task-manage.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { HomeComponent } from './home/home.component';
import {CardListComponent} from './card-list/card-list.component';
import {AddCardComponent} from './add-card/add-card.component';
import {TerminalSettingComponent} from './terminal-setting/terminal-setting.component';
import {EmvDataComponent} from './emv-data/emv-data.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {ListConnectionComponent} from './list-connection/list-connection.component';
import {AddConnectionComponent} from './add-connection/add-connection.component';
import {UserManagementComponent} from './user-management/user-management.component';
import {AddUserComponent} from './add-user/add-user.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {TemplateConfigureComponent} from './template-configure/template-configure.component';
import {AddTemplateComponent} from './add-template/add-template.component';
import {EditTransactionComponent} from './edit-transaction/edit-transaction.component';
import {DEComponent} from './de/de.component';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  {
    path:'Home',
    component: HomeComponent
  },
 
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path :'Card-List',
    component : CardListComponent
  },
  {
    path :'Add-Card',
    component : AddCardComponent
  },
  {
    path: 'Edit-Card/:id/:opt',
    component: AddCardComponent
  },
  {
    path : 'Duplicate-Card/:id/:opt',
    component: AddCardComponent
  },
  {
    path: 'Terminal-Setting',
    component : TerminalSettingComponent
  },
  {
     path : 'Emv-Data/:id/:opt',
     component: EmvDataComponent
   },
   {
    path: 'User-Profile',
    component: UserManagementComponent
  },
  {
   path: 'List-Connection',
   component: ListConnectionComponent
 },
 {
   path :'Add-Connection',
   component : AddConnectionComponent
 },
 {
   path: 'Edit-Connection/:id/:opt',
   component: AddConnectionComponent
 },
 {
   path : 'Duplicate-Connection/:id/:opt',
   component: AddConnectionComponent
 },
 {
   path :'Add-User',
   component : AddUserComponent
 },
 {
   path :'User-Management',
   component : UserManagementComponent
 },
 {
   path : 'Edit-User/:id/:opt',
   component : AddUserComponent
 },
 {
  path : 'View-Profile',
  component : UserProfileComponent
},
{
 path : 'Change-Password',
 component : ChangePasswordComponent
},
{
  path : 'Edit-Emv-Data/:id/:opt',
  component: EmvDataComponent
},
{
  path : 'Template-Configuration',
  component : TemplateConfigureComponent
},
{
  path : 'Add-Template',
  component : AddTemplateComponent
},
{
  path : 'Edit-Script',
  component :EditTransactionComponent
},
{
  path : 'Edit-Template',
  component : AddTemplateComponent
},
{
  path :'Edit-Trasnsction/:id/:opt',
  component : EditTransactionComponent
},
{
  path: 'Edit-Message/:id/:opt',
  component : EditTransactionComponent
},
{
  path:'Edit-Template/:id/:opt',
  component : AddTemplateComponent
},
{path:'DE',component:DEComponent}
  
];
console.log("path",routes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
