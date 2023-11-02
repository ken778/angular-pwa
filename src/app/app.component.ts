import { Component,OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogContentExampleDialogComponent } from './Components/dialog-content-example-dialog/dialog-content-example-dialog.component';

import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-pwa';

  constructor(public matdDialog: MatDialog, private _router: Router) {}

  
  ngOnInit(){
   
  }


  name!: string;
  lastNme!: string;
  message!: `Welcome to out PWA`;  

  submit(){
    window.alert(`hello ${this.name}`)
   
  }

  openDialog(){
      this.matdDialog.open(DialogContentExampleDialogComponent,{
        width:'350px'
      })
  }
  login(){
    this._router.navigate(['/questions'])
    console.log('clicked')
  }
}
