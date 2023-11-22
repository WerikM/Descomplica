import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListPage } from './pages/client-list-page.component';
import { Filho1pageComponent } from './pages/filho1-page.component';
import { Filho2pageComponent } from './pages/filho2-page.component';
import { PaiPageComponent } from './pages/pai.component';
import { UserGuard } from './guards/user.guard';
import { LoginPageComponents } from './pages/login-page.components';
import { ClientDetalhePageComponent } from './pages/client-detalhe-page.component';
import { RXJSPageComponent } from './pages/rxjs-page.component';
import { ListaPessoasPage } from './pages/lista-pessoas-page.component';
import { UserPageComponent } from './pages/user-page.component';


const routes: Routes = [
  {path: 'client', component: ClientListPage, canActivate: [UserGuard]}, 
  {path: 'pai', component: PaiPageComponent,
   children: [
    {path: 'filho1', component: Filho1pageComponent},
    {path: 'filho2', component: Filho2pageComponent}
   ]
  },
  {path: 'login', component: LoginPageComponents},
  {path: 'client/detalhe/:id', component: ClientDetalhePageComponent},
  {path: 'RXJS', component: RXJSPageComponent},
  {path: 'listaPessoas', component: ListaPessoasPage},
  {path: 'listaUsuarios', component: UserPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
