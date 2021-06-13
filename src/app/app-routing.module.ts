import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNotaComponent } from './components/create-nota/create-nota.component';
import { ListNotasComponent } from './components/list-notas/list-notas.component';
import { ViewNotaComponent } from './components/view-nota/view-nota.component';

const routes: Routes = [
  {path:'', redirectTo:'list-notas', pathMatch: 'full'},
  {path: 'list-notas', component:ListNotasComponent},
  {path: 'list-buscador/:filtro', component:ListNotasComponent},
  {path: 'create-nota', component:CreateNotaComponent},
  {path: 'editar-nota/:id', component:CreateNotaComponent},
  {path: 'visualizar-nota/:id', component:ViewNotaComponent},
  {path:'**', redirectTo:'list-notas', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
