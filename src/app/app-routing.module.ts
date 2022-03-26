import { DirectivespracticeComponent } from './directivespractice/directivespractice.component';
import { ServersComponent } from './servers/servers.component';
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
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
