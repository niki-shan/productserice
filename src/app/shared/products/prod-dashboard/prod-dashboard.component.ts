import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Idata } from '../../models/data';

@Component({
  selector: 'app-prod-dashboard',
  templateUrl: './prod-dashboard.component.html',
  styleUrls: ['./prod-dashboard.component.scss']
})
export class ProdDashboardComponent implements OnInit {
  productsArray : Array<Idata> = []
  
  constructor(private _productService : ProductService) { }

  ngOnInit(): void {
    this.productsArray  = this._productService.getAllProducts()
  }

}
