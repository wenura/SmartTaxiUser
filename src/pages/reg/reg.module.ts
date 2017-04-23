import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Reg } from './reg';

@NgModule({
  declarations: [
    Reg,
  ],
  imports: [
    IonicModule.forChild(Reg),
  ],
  exports: [
    Reg
  ]
})
export class RegModule {}
