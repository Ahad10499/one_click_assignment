import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  displayArray= [];
  closeResult: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(AlertModalComponent, {
      width: '330px',
      height: '400px',
      data: {
        title: 'modal1'
      }
    });
    dialogRef.afterClosed().subscribe(
      res=> {
        console.log(res);
        this.displayArray.push(res);
      }
    )
  }
  

}
