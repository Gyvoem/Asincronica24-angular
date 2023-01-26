import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActComponent, DialogData } from '../act/act.component';

import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {


    constructor(
      public dialogRef: MatDialogRef<ActComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}
    
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }


