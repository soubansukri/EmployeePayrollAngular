import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {A11yModule} from '@angular/cdk/a11y';
import{ClipboardModule} from '@angular/cdk/clipboard';
import{CdkStepperModule} from '@angular/cdk/stepper';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    A11yModule,
    ClipboardModule,
    CdkStepperModule
  ]
})
export class AngularMaterialModule { }
