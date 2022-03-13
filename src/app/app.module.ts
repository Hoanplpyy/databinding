import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningalertComponent } from './warningalert/warningalert.component'
import { SuccessAlertComponent } from './successAlert/successAlert.component';
import { ServersComponent } from './servers/servers.component';

import { FormsModule } from '@angular/forms';  // import FormsModule

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './services/shared/shared.module';
import { ChildComponent } from './warningalert/child/child.component';
import { ChildshowioComponent } from './warningalert/childshowio/childshowio.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningalertComponent,
    SuccessAlertComponent,
    ServersComponent,
    ChildComponent,
    ChildshowioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
