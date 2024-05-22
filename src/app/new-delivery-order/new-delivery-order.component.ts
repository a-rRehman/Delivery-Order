import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new-delivery-order',
  standalone: true,
  templateUrl: './new-delivery-order.component.html',
  styleUrls: ['./new-delivery-order.component.css'],
  imports: [ReactiveFormsModule],
})
export class NewDeliveryOrderComponent {
  deliveryOrderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.deliveryOrderForm = this.fb.group({
      client: ['', Validators.required],
      orderedBy: this.fb.group({
        firstName: [''],
        lastName: [''],
      }),
      pickUp: this.fb.group({
        addressBook: [''],
        newBookEntry: this.fb.group({
          firstName: [''],
          lastName: [''],
        }),
        companyName: [''],
        address1: [''],
        address2: [''],
        city: [''],
        state: [''],
        zip: [''],
        phone: [''],
        extension: [''],
        email: [''],
      }),
      dropOff: this.fb.group({
        addressBook: [''],
        newBookEntry: this.fb.group({
          firstName: [''],
          lastName: [''],
        }),
        companyName: [''],
        address1: [''],
        address2: [''],
        city: [''],
        state: [''],
        zip: [''],
        phone: [''],
        extension: [''],
        email: [''],
      }),
      serviceDetails: [''],
      serviceLevel: [''],
      desiredDeliveryDate: [''],
      description: [''],
      specialInstructions: [''],
      additionalOptions: this.fb.group({
        leaveWithoutSignature: [false],
        returnService: [false],
        residenceOrMedicalCenter: [false],
        processNotification: [false],
        deliveryOver25Lbs: [false],
        notaryService: [false],
        nightWeekendHoliday: [false],
        deliveryNotification: [false],
      }),
      calculatedMiles: [''],
      calculatedServiceArea: [''],
      estimatedCharges: [''],
      total: [''],
    });
  }

  onSubmit() {
    console.log(this.deliveryOrderForm.value);
  }
}
