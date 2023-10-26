import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { ProductService } from '../../services/product.service';

import { Idata, ProductStatus } from '../../models/data';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss']
})
export class ProdFormComponent implements OnInit {
  @Input() productform!: FormGroup;
  constructor(private _UuidService : UuidService,
    private _ProductService: ProductService ) { }

  ngOnInit(): void {
        this.createprod()

  }

  createprod(){
    this.productform = new FormGroup(
      {
        Pname : new FormControl (null, [Validators.required]),
        Pdetail : new FormControl (null, [Validators.required]),
        // Pstatus : new FormControl (null,[Validators.required])
      }
    ) 
  }


  onproAdd(){
    if(this.productform.valid){
      let newProd : Idata = {...this.productform.value,
      id: this._UuidService.uuidv4(),
      Psatus : ProductStatus.delivered }
      console.log(newProd)

      this._ProductService.createAllprod(newProd)
      this.productform.reset()
    }
    
   
  }
 

}
