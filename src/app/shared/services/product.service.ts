import { Injectable } from '@angular/core';
import { Idata, ProductStatus } from '../models/data';
import { prodArrray } from '../const/data';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsArray  : Array<Idata>  = prodArrray
  constructor(private _snackbarService : SnackbarService) { }

  getAllProducts(){
    return this.productsArray
  }
 
  createAllprod(prod : Idata ){
    this.productsArray.push(prod)
    this._snackbarService.openSnackBar(`this product ${prod.Pname} is added`, `close`)
     

  }

  onUpdatestatus(id:string, updatestatus: ProductStatus){
    for (const obj of this.productsArray) {
       if(id==obj.id){
        obj.Pstatus =   updatestatus
       }
      
    }

  }


}
