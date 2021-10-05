import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importing the store
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './store/reducers';
import { TestComponent } from './components/test.component';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { AddRemoveComponent } from './add-remove/add-remove.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { MainComponent } from './main/main.component';
import { ConfigureCronComponent } from "./configure-cron/configure-cron.component";
import { CronEditorModule } from "cron-editor";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ApiService } from './services/api.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AddRemoveComponent,
    TitleBarComponent,
    MainComponent,
		ConfigureCronComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //Binding the store.The store contains only a single reducer
    StoreModule.forRoot({
      users : UserReducer
    }),ToastrModule.forRoot({
			timeOut: 5000,
			positionClass: 'toast-bottom-right',
			preventDuplicates: true,
		}),
		ToastContainerModule,
    CronEditorModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSelectModule,
    MatMenuModule,
    MatDividerModule,
    MatBottomSheetModule,
    MatListModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
