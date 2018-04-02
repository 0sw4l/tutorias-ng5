import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AmazingTimePickerService} from 'amazing-time-picker';
import {ApiService} from '../services/api.service';

declare var jquery: any;
declare var $: any;
declare var swal: any;

@Component({
  selector: 'app-dialog-calificacion',
  templateUrl: './dialog-calificacion.component.html',
  styleUrls: ['./dialog-calificacion.component.css']
})
export class DialogCalificacionComponent implements OnInit {
  id: any = null;
  comentario: any = null;
  rating: any = null;

  constructor(public dialogRef: MatDialogRef<DialogCalificacionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private atp: AmazingTimePickerService,
              private api: ApiService) {
  }

  ngOnInit() {
    this.id = this.data['id'];
    const self = this;
    $('.value-set').stars({
      value: 0,
      click: function (star) {
        self.rating = star;
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  sendRequest() {
    this.api.calificarTutoria(this.id, this.getDataSolicitud()).subscribe((data) => {
      if (data['success']) {
        this.showSuccessAlert();
      }
    });
  }

  getDataSolicitud() {
    return {
      'id': this.id,
      'comentario': this.comentario,
      'calificacion': this.rating
    };
  }

  showSuccessAlert() {
    swal('Calificacion Enviada!', 'Su calificacion fue enviada exitosamente!', 'success');
    this.onNoClick();
  }

}
