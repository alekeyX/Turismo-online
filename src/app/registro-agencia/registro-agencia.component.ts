import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-registro-agencia',
  templateUrl: './registro-agencia.component.html',
  styleUrls: ['./registro-agencia.component.css']
})
export class RegistroAgenciaComponent implements OnInit {

  customer: Customer = new Customer();
  submitted = false;
  
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    this.customerService.createCustomer(this.customer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.customer = new Customer();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
