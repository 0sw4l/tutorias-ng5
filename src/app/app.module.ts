import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SesionComponent } from './sesion/sesion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PerfilTutorComponent } from './perfil-tutor/perfil-tutor.component';
import { DetalleMateriaComponent } from './detalle-materia/detalle-materia.component';
import { InicioComponent } from './inicio/inicio.component';
import { MateriasComponent } from './materias/materias.component';
import { TutoresComponent } from './tutores/tutores.component';
import { MateriasUsuarioComponent } from './materias-usuario/materias-usuario.component';
import {HttpClientModule} from '@angular/common/http';
import {APP_ROUTING} from './app.routes';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AmazingTimePickerModule, AmazingTimePickerService} from 'amazing-time-picker';
import {
  MAT_DATE_LOCALE,
  MAT_DIALOG_DATA, MAT_TOOLTIP_DEFAULT_OPTIONS, MatDatepickerModule, MatDialogModule, MatDialogRef, MatNativeDateModule, MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import {ApiService} from './services/api.service';
import { DialogSolicitudComponent } from './dialog-solicitud/dialog-solicitud.component';
import {ForbiddenValidatorDirective} from './directives/forbidden-name.directive';


@NgModule({
  declarations: [
    AppComponent,
    SesionComponent,
    NavbarComponent,
    PerfilUsuarioComponent,
    PerfilTutorComponent,
    DetalleMateriaComponent,
    InicioComponent,
    MateriasComponent,
    TutoresComponent,
    MateriasUsuarioComponent,
    DialogSolicitudComponent,
    ForbiddenValidatorDirective
  ],
  entryComponents: [
    DialogSolicitudComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING,
    MatSnackBarModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTooltipModule,
    AmazingTimePickerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    ApiService,
    AmazingTimePickerService,
    { provide: MAT_DIALOG_DATA, useValue: {}},
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: {} },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  ],
  bootstrap: [AppComponent],
  exports: [
    MatSnackBarModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    ForbiddenValidatorDirective
  ]
})
export class AppModule { }
