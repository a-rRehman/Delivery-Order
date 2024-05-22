import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-delivery-order',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './delivery-order.component.html',
  styleUrls: ['./delivery-order.component.scss'],
})
export class DeliveryOrderComponent {
  deliveryOrderForm: FormGroup;

  clients = [
    { name: 'Jackson Lewis', code: 'JL' },
    { name: 'Other Client', code: 'OC' },
  ];
  users = [
    { name: 'User 1', code: 'U1' },
    { name: 'User 2', code: 'U2' },
  ];

  addressBook = [
    { name: 'Address 1', code: 'Aa1' },
    { name: 'Address 2', code: 'Aa2' },
  ];

  addressBook1 = [
    { name: 'Address A', code: 'AA1' },
    { name: 'Address B', code: 'AA2' },
  ];

  constructor(private fb: FormBuilder) {
    this.deliveryOrderForm = this.fb.group({
      client: [null, Validators.required],
      user: [null, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      addressBook: ['', Validators.required],
      addressBook1: ['', Validators.required],
      bookEntry: ['', Validators.required],
      bookEntry1: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.deliveryOrderForm.valid) {
      console.log(this.deliveryOrderForm.value);
    }
  }
}
