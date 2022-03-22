import { ServersComponent } from './servers/servers.component';
import { WarningalertComponent } from './warningalert/warningalert.component';
import { SuccessAlertComponent } from './successAlert/successAlert.component';
import { ServerComponent } from './server/server.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: ServerComponent },
      { path: 'server', component: ServerComponent },
      { path: 'successalert', component: SuccessAlertComponent },
      { path: 'warningalert', component: WarningalertComponent },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
