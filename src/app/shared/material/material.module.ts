import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const modulArray=[
  MatCardModule,
  MatButtonModule,
  MatSnackBarModule,
  
  
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modulArray
  ],
  exports: [
  ...modulArray,

  ]
})
export class MaterialModule { }
