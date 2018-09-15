import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RcloneDetailComponent } from './rclone-detail/rclone-detail.component';
import { RcloneComponent } from './rclone/rclone.component';
import { FileSizePipe } from './file-size.pipe';
import { TimeSpanPipe } from './time-span.pipe';

import {CardModule} from 'primeng/card';
import {ProgressBarModule} from 'primeng/progressbar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToolbarModule} from 'primeng/toolbar';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { StorageServiceModule } from 'angular-webstorage-service';


@NgModule({
  declarations: [
    AppComponent,
    RcloneDetailComponent,
    RcloneComponent,
    FileSizePipe,
    TimeSpanPipe,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ProgressBarModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    AppRoutingModule,
    ToolbarModule,
    StorageServiceModule
  ],
  exports: [
    FileSizePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
