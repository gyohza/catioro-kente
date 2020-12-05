import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OcsardpEditComponent } from './ocsardp-edit/ocsardp-edit.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'cu', component: OcsardpEditComponent },
    ]),
    CommonModule
  ]
})
export class OCaraSubiuARuaDePeModule { }
