import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogContentExampleDialogComponent } from '../../dialog-content-example-dialog/dialog-content-example-dialog.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {



  
  constructor(public matdDialog: MatDialog, private _router: Router) {}

  
  ngOnInit(){
    this.openDialog()
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
