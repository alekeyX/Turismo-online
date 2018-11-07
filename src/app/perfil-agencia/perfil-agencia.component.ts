import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-perfil-agencia',
  templateUrl: './perfil-agencia.component.html',
  styleUrls: ['./perfil-agencia.component.css']
})
export class PerfilAgenciaComponent implements OnInit {

  constructor(private dataService: CustomerService) { }

  ngOnInit() {
    
  }
}
