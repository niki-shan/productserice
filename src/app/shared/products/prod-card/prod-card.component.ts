import { Component, Input, OnInit } from '@angular/core';
import { Idata, ProductStatus } from '../../models/data';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.scss']
})
export class ProdCardComponent implements OnInit {
 @Input() productobj !:Idata
  constructor(private _productService : ProductService) { }

  ngOnInit(): void {
  }

  onPrograse(){
     this._productService.onUpdatestatus(this.productobj.id, ProductStatus.Inprograse)
  }
  onDispatch(){
    this._productService.onUpdatestatus(this.productobj.id, ProductStatus.dispatched)
  }
  onDelivered(){
    this._productService.onUpdatestatus(this.productobj.id, ProductStatus.delivered )
  }

}
