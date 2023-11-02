import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';


import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContentExampleDialogComponent } from './Components/dialog-content-example-dialog/dialog-content-example-dialog.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { QuestionsComponent } from './Components/questions/questions/questions.component';
import { QuestionModalComponent } from './Components/questionsModal/question-modal/question-modal.component';
import { LandingComponent } from './Components/landing/landing/landing.component';
import {MatSelectModule} from '@angular/material/select';




// import {environment} 

@NgModule({
  declarations: [
    AppComponent,
    DialogContentExampleDialogComponent,
    QuestionsComponent,
    QuestionModalComponent,
    LandingComponent,

  ],
  imports: [
    MatSelectModule,
    MatIconModule, 
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
