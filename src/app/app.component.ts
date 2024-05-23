import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { DeliveryOrderComponent } from './delivery-order/delivery-order.component';
import { TreeTableSelectionCheckboxDemo } from './tree-table-selection-checkbox-demo/tree-table-selection-checkbox-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    ReactiveFormsModule,
    DeliveryOrderComponent,
    TreeTableSelectionCheckboxDemo,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'delivery-order-form';
}
