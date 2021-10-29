import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {
  alertAddForm:FormGroup;

  type1=['HardDisk Space','Memory Usage','Web Server'];
  type2=['Is More than','is less than','equalto'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public ref:MatDialogRef<AlertModalComponent>, private fb: FormBuilder) { }

  ngOnInit() {
    
    console.log(this.data);
    this.alertAddForm = this.fb.group({
      selectType : [''],
      selectCondition: ['']
  })
  }
  addType(selectType:any){
    console.log(selectType);
    this.ref.close(this.alertAddForm.value);
  }

}
