import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';



const routes: Routes = [

  { path: '',  pathMatch: 'full', redirectTo:'home' },
  {
    path: 'home', component: HomeComponent, children: [

      { path: 'quiensoy', component: QuiensoyComponent },
    ]
  },
  { path: 'quiensoy', component: QuiensoyComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
