import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {MateriasComponent} from './materias/materias.component';
import {TutoresComponent} from './tutores/tutores.component';
import {DetalleMateriaComponent} from './detalle-materia/detalle-materia.component';
import {PerfilTutorComponent} from './perfil-tutor/perfil-tutor.component';
import {PerfilUsuarioComponent} from './perfil-usuario/perfil-usuario.component';
import {MateriasUsuarioComponent} from './materias-usuario/materias-usuario.component';
import {SolicitudesEnviadasComponent} from './solicitudes-enviadas/solicitudes-enviadas.component';
import {SolicitudesRecibidasComponent} from './solicitudes-recibidas/solicitudes-recibidas.component';

const APP_ROUTES: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'materias', component: MateriasComponent },
  { path: 'materia/:id', component: DetalleMateriaComponent },
  { path: 'tutores', component: TutoresComponent },
  { path: 'tutor/:id', component: PerfilTutorComponent },
  { path: 'perfil', component: PerfilUsuarioComponent },
  { path: 'mis-materias', component: MateriasUsuarioComponent },
  { path: 'solicitudes-enviadas', component: SolicitudesEnviadasComponent },
  { path: 'solicitudes-recibidas', component: SolicitudesRecibidasComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
