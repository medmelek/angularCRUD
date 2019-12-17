import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LauncherComponent } from './launcher/launcher.component';
import {LoaderService} from './services/loader.service';
import {LoaderInterceptor} from './services/interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './dashboard/list/list.component';
import { ToolbarComponent } from './dashboard/toolbar/toolbar.component';
import { CrudComponent } from './dashboard/crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    LauncherComponent,
    DashboardComponent,
    ListComponent,
    ToolbarComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
