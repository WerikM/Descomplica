import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/heade.component';
import { CommonModule } from '@angular/common';
import { ComponentModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { ClientListPage } from './pages/client-list-page.component';
import { BindingPageComponent } from './pages/binding-page.component';
import { CustomUpperCasePipe } from './pipes/custom-uppercase.pipe';
import { ClientService } from './services/client.service';
import { Filho1pageComponent } from './pages/filho1-page.component';
import { Filho2pageComponent } from './pages/filho2-page.component';
import { PaiPageComponent } from './pages/pai.component';
import { LoginPageComponents } from './pages/login-page.components';
import { ClientDetalhePageComponent } from './pages/client-detalhe-page.component';
import { RXJSPageComponent } from './pages/rxjs-page.component';
import { ListaPessoasPage } from './pages/lista-pessoas-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UserPageComponent } from './pages/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListPage,
    BindingPageComponent,
    CustomUpperCasePipe,
    PaiPageComponent,
    Filho1pageComponent,
    Filho2pageComponent,
    ClientListPage,
    LoginPageComponents,
    ClientDetalhePageComponent,
    RXJSPageComponent,
    ListaPessoasPage,
    UserPageComponent
    
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
