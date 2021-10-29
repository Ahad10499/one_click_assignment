import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AlertModalComponent } from "./alert-modal/alert-modal.component";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.css"],
})
export class AlertComponent implements OnInit {
  displayArray = [];
  closeResult: string;
  displayData= [];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    let dialogRef = this.dialog.open(AlertModalComponent, {
      width: "300px",
      height: "350px",
      data: {
        title: "modal1",
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.displayArray.push(res);
    });
  }
  openModal() {
    let dialogRef = this.dialog.open(AlertModalComponent, {
      width: "270px",
      height: "350px",
      data: {
        title: "modal2",
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.displayData.push(res);
    });
  }
}
