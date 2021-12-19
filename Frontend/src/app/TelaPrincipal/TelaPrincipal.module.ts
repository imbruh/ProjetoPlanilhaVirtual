import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaPrincipalComponent } from './TelaPrincipal.component';
import { LayoutModule } from '../shared/layout/layout.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule
  ],
  declarations: [TelaPrincipalComponent]
})
export class TelaPrincipalModule { }
