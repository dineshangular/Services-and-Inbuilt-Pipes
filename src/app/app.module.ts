import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouteConfigLoadStart} from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeSerivceListComponent } from './employee-serivce-list/employee-serivce-list.component';
import { EmployeeService } from './services/employee.service';

const appRoutes: Routes = [
  { path:'employee-service-list', component:EmployeeSerivceListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSerivceListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
