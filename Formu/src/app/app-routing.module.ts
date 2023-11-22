import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoasPageComponent } from './pages/pessoas-page/pessoas-page.component';
import { PessoasAddPageComponent } from './pages/pessoas-add-page/pessoas-add-page.component';

const routes: Routes = [
  {path: 'pessoas', component: PessoasPageComponent},
  {path: 'cadastro/pessoas', component: PessoasAddPageComponent},
  {path: 'cadastro/pessoas/:id', component: PessoasAddPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
