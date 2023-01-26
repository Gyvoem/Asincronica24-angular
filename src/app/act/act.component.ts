import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; 
import { BoxComponent } from '../box/box.component';

export interface DialogData {
  name: string;
  sport: string;
}
/* 
class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
} */


@Component({
  selector: 'app-act',
  templateUrl: './act.component.html',
  styleUrls: ['./act.component.css']
})
  
  export class ActComponent {
    data: any;
    onNoClick() {
    throw new Error('Method not implemented.');
  }

  public name='';
  public sport = '';

   constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(BoxComponent, {
      data: { name: this.name, depor: this.sport },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.sport = result;
    });
  }
}
