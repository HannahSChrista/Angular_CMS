import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DOCTORComponent } from './doctor/doctor.component';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
  {path:'',redirectTo:'shared/home',pathMatch:'full'},
  {
    path:'doctor',component:DOCTORComponent,
    loadChildren : ()=>import('./doctor/doctor.module')
    .then(x=>x.DOCTORModule)
  },
  {
    path: 'shared',component:SharedComponent,
    loadChildren:()=>import('./shared/shared.module')
    .then(x=>x.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
