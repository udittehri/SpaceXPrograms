import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { Progra/mComponent } from './components/program/program.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/programs', pathMatch: 'full'},
  { path: 'programs', component: HomeComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
