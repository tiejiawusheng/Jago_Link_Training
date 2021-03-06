import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VehicleService } from './vehicle.service';
import {
  routedComponents,
  VehiclesRoutingModule
} from './vehicles-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, VehiclesRoutingModule],
  declarations: [routedComponents],
  providers: [VehicleService]
})
export class VehiclesModule {}
