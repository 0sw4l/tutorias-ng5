import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AmazingTimePickerService} from 'amazing-time-picker';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-dialog-comentarios-tutor',
  templateUrl: './dialog-comentarios-tutor.component.html',
  styleUrls: ['./dialog-comentarios-tutor.component.css']
})
export class DialogComentariosTutorComponent implements OnInit {
  id: any = null;
  opiniones: any = [];
  cantidad: any = [];
  constructor(public dialogRef: MatDialogRef<DialogComentariosTutorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private atp: AmazingTimePickerService,
              private api: ApiService) { }

  ngOnInit() {
    this.id = this.data['id'];
    this.api.getOpinionesUsuario(this.id).subscribe(
      data => {
        this.opiniones = data['solicitudes'];
        this.cantidad = data['cantidad'];
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createRange(number) {
    const items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

}
