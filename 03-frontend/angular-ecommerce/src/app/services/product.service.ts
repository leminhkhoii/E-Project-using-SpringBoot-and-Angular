import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import {map} from 'rxjs/operators'
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

  private baseUrl= 'http://localhost:8080/api/products?projection=customProduct'
  private categoryUrl = 'http://localhost:8080/api/product-category?projection=customCategory'
  // private baseUrl='http://localhost:8080/api/products/search/findByCategoryId?id=2&projection=customProduct'

  constructor(private httpClient: HttpClient) { }

  getProduct(theProductId: number): Observable<Product> {
    // need to build Url based on product id
    const productUrl = `http://localhost:8080/api/products/${theProductId}?projection=customProduct`

    return this.httpClient.get<Product>(productUrl);
  }

  getProductListPaginate(thePage: number, thePageSize: number, theCategoryId: number): Observable<GetResponseProduct>{
    // @Todo: need to build URL based on category id ... will come back to this!
    const searchUrl = `http://localhost:8080/api/products/search/findByCategoryId?id=${theCategoryId}&page=${thePage}&size=${thePageSize}&projection=customProduct`;
    console.log(`Request URL: ${searchUrl}`);
    return this.httpClient.get<GetResponseProduct>(searchUrl);
  }


  getProductList(theCategoryId: number): Observable<Product[]>{
    // @Todo: need to build URL based on category id ... will come back to this!
    const searchUrl = `http://localhost:8080/api/products/search/findByCategoryId?id=${theCategoryId}&projection=customProduct`
    console.log(`Request URL: ${searchUrl}`);
    return this.getProducts(searchUrl);
  }

  searchProduct(theKeyword: string): Observable<Product[]> {
    const searchUrl = `http://localhost:8080/api/products/search/findByNameContaining?name=${theKeyword}&projection=customProduct`
    console.log(`Request URL: ${searchUrl}`);
    return this.getProducts(searchUrl);
  }

  searchProductsPaginate(thePage: number, thePageSize: number, theKeyword: string): Observable<GetResponseProduct>{
    // @Todo: need to build URL based on keyword ... will come back to this!
    const searchUrl = `http://localhost:8080/api/products/search/findByNameContaining?name=${theKeyword}&page=${thePage}&size=${thePageSize}&projection=customProduct`;
    console.log(`Request URL: ${searchUrl}`);
    return this.httpClient.get<GetResponseProduct>(searchUrl);
  }

  private getProducts(searchUrl: string): Observable<Product[]>{
    console.log(`Request URL: ${searchUrl}`);
    return this.httpClient.get<GetResponseProduct>(searchUrl).pipe(
      map(response => response._embedded.products)
    )
  }


  getProductCategories(): Observable<ProductCategory[]> {

    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productcategory)
    )
  }

}

  
interface GetResponseProduct{
  _embedded:{
    products: Product[];
  },
  page:{
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseProductCategory{
  _embedded:{
    productcategory: ProductCategory[];
  }
}
