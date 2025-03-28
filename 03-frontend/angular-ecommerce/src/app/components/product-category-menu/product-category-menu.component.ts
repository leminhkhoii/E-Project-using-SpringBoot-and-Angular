import { Component } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-category-menu',
  imports: [RouterModule, NgFor, CommonModule],
  templateUrl: './product-category-menu.component.html',
  styleUrl: './product-category-menu.component.css'
})
export class ProductCategoryMenuComponent {
  productCategories: ProductCategory[] = [];

  constructor(private productSerice: ProductService){

  }

  ngOnInit(){
    this.listProductCategories();
  }

  listProductCategories() {
    this.productSerice.getProductCategories().subscribe(
      data => {
        console.log('Product Categories= '+JSON.stringify(data));
        this.productCategories = data;
      }
    );
  }
}
