import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule  } from '@angular/forms';

import {  MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import { MatToolbarModule  } from  '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import {NgxPaginationModule} from 'ngx-pagination'


import { ApiService } from './api.service';

import { TaskManageComponent } from './task-manage/task-manage.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { ToastrModule } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CardListComponent } from './card-list/card-list.component';
import { AddCardComponent } from './add-card/add-card.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { TerminalSettingComponent } from './terminal-setting/terminal-setting.component';
import { EmvDataComponent } from './emv-data/emv-data.component';
import { AddConnectionComponent } from './add-connection/add-connection.component';
import { ListConnectionComponent } from './list-connection/list-connection.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TemplateConfigureComponent } from './template-configure/template-configure.component';
import { AddTemplateComponent } from './add-template/add-template.component';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DEComponent } from './de/de.component';
import {MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    TaskManageComponent,
    TaskDetailsComponent,
    RegistrationComponent,
    LoginComponent,
    SidenavListComponent,
    HomeComponent,
    CardListComponent,
    AddCardComponent,
    MenuBarComponent,
    TerminalSettingComponent,
    EmvDataComponent,
    AddConnectionComponent,
    ListConnectionComponent,
    UserProfileComponent,
    UserManagementComponent,
    AddUserComponent,
    ChangePasswordComponent,
    TemplateConfigureComponent,
    AddTemplateComponent,
    EditTransactionComponent,
    DEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatTreeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatExpansionModule,
    NgxPaginationModule,
    ToastrModule.forRoot()    
  ],
  exports :[
    MatSidenavModule,
    MatListModule
  ],
  providers: [ApiService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }


