import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Material theme components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';  

import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TorrentsTableComponent } from './torrents-table/torrents-table.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressBarModule } from "angular-progress-bar"
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddTorrentDialogComponent } from './add-torrent-dialog/add-torrent-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

var appRoutes: Routes;

// Login page is only needed during development/testing
if(!environment.production){
  appRoutes = [
    { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent}
  ]
} else {
  appRoutes = [
    { path: '', component: HomeComponent}
  ]
}

@NgModule({
  declarations: [
    AppComponent,
    TorrentsTableComponent,
    LoginComponent,
    HomeComponent,
    AddTorrentDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    ProgressBarModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
