import { ClassFiveHomeworkComponent } from './class-five-homework/class-five-homework.component';
import { ClassFiveComponent } from './class-five/class-five.component';
import { DirectivespracticeComponent } from './directivespractice/directivespractice.component';
import { WarningalertComponent } from './warningalert/warningalert.component';
import { SuccessAlertComponent } from './successAlert/successAlert.component';
import { ServerComponent } from './server/server.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakPointComponent } from './break-point/break-point.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: ServerComponent },
      { path: 'server', component: ServerComponent },
      { path: 'successalert', component: SuccessAlertComponent },
      { path: 'warningalert', component: WarningalertComponent },
      { path: 'directivesHomework', component: DirectivespracticeComponent },
      { path: 'BreakPoint', component: BreakPointComponent },
      { path: 'classfive', component: ClassFiveComponent },
      { path: 'classfiveHomework', component: ClassFiveHomeworkComponent },


    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
