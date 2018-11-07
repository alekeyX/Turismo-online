import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {

  age: number;
  id: number;
  customers: Customer[];
  custom: Customer[];

  constructor(private dataService: CustomerService) { }

  ngOnInit() {
    this.age = 0;
    this.id = 1;
  }

  private searchCustomers() {
    this.dataService.getCustomersByAge(this.age)
      .subscribe(customers => this.customers = customers);
  }

  private searchCustomersId() {
    this.dataService.getCustomersById(this.id)
    .subscribe(custom => this.custom = custom);
  }

  onSubmit() {
    this.searchCustomers();
  }

  onSubmit1() {
    this.searchCustomersId();
  }
}
