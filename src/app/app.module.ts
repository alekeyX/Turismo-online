import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegistroAgenciaComponent } from './registro-agencia/registro-agencia.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistroTuristaComponent } from './registro-turista/registro-turista.component';
import { PerfilAgenciaComponent } from './perfil-agencia/perfil-agencia.component';
import { PerfilTuristaComponent } from './perfil-turista/perfil-turista.component';
import { EditarAgenciaComponent } from './editar-agencia/editar-agencia.component';
import { EditarTuristaComponent } from './editar-turista/editar-turista.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'RegistroAgencia', component: RegistroAgenciaComponent },
  { path: 'RegistroTurista', component: RegistroTuristaComponent },
  { path: 'PerfilAgencia', component: PerfilAgenciaComponent },
  { path: 'PerfilTurista', component: PerfilTuristaComponent },
  { path: 'EditarAgencia', component: EditarAgenciaComponent },
  { path: 'EditarTurista', component: EditarTuristaComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    SearchCustomersComponent,
    RegistroAgenciaComponent,
    CabeceraComponent,
    LoginComponent,
    RegistroTuristaComponent,
    PerfilAgenciaComponent,
    PerfilTuristaComponent,
    EditarAgenciaComponent,
    EditarTuristaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
