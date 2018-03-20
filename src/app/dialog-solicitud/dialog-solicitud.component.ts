import {Component, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDatepicker, MatDialogRef} from '@angular/material';
import {DecimalPipe} from '@angular/common';
import {AmazingTimePickerService} from 'amazing-time-picker';
import {NgForm} from '@angular/forms';
import {ApiService} from '../services/api.service';
declare var jquery: any;
declare var $: any;
declare var swal: any;

@Component({
  selector: 'app-dialog-solicitud',
  templateUrl: './dialog-solicitud.component.html'
})
export class DialogSolicitudComponent {
  selectedTime: any = null;
  selectedDate: any = null;
  mensaje: any = null;
  horas: number = null;
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;

  constructor(public dialogRef: MatDialogRef<DialogSolicitudComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private atp: AmazingTimePickerService,
              private api: ApiService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendRequest() {
    this.api.enviarSolicitud(this.getDataSolicitud()).subscribe((data) => {
      if (data['id']) {
        this.showSuccessAlert();
      }
    });
  }

  getDataSolicitud() {
    console.log(this.selectedDate);
    return {
      'tutor': this.data['tutor_id'],
      'materia': this.data['materia_tutor_id'],
      'descripcion': this.mensaje,
      'fecha': this.selectedDate.toISOString().slice(0, 10),
      'hora': this.selectedTime,
      'interesado': localStorage.getItem('user_id')
    };
  }

  showSuccessAlert() {
    swal('Solicitud Enviada!', 'Su solicitud fue enviada exitosamente!', 'success');
    this.onNoClick();
  }

}
