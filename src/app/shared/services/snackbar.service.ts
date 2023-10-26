import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _matSnack : MatSnackBar) { }


  
    openSnackBar(massage:string, action:string){
        this._matSnack.open(massage , action,  {
           duration : 2000,
           horizontalPosition : 'right',
           verticalPosition : 'top'

        }) 
    }
  
}
