import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alertAddForm: FormGroup;
  alertModalForm: FormGroup;

  type1 = ["HardDisk Space", "Memory Usage", "Web Server"];
  type2 = ["Is More than", "is less than", "equalto"];
  type3 = ["Web Server"];
  type4 = [""];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public ref: MatDialogRef<AppComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.alertForm();
    this.alertSecondForm();
  }
  alertForm() {
    this.alertAddForm = this.fb.group({
      selectType: [""],
      selectCondition: [""],
    });
  }
  alertSecondForm() {
    this.alertModalForm = this.fb.group({
      alertType: [""],
      url: [""],
      response: [""],
    });
  }
  addType(selectType: any) {
    console.log(selectType);
    this.ref.close(this.alertAddForm.value);
  }
}
