import { Injectable } from '@angular/core';
import Parse from 'parse';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [];

  constructor(private utils: UtilsService) { }
  public async getProducts(word?) {
    let query = new Parse.Query('ECommerceProduct').equalTo("status", true);
    if (word && word.trim() != "") {
      query.contains("nameSearch", word.trim());
    }
    this.products = await query.find();
  }
  public async getProduct(id, params) {
    const result = await new Parse.Query('ECommerceProduct').get(id);
    return { obj: this.utils.parseObjectToObject(result, params), raw: result };
  }
  public enableDisableProduct(product) {
    product.set("enabled", !product.get("enabled")).save();
  }

  public async saveNewProduct(data, extraParams, success, error) {
    try {
      let product = this.utils.parseGenericObject("ECommerceProduct");
      product.set("name", data.name);
      product.set("price", data.price);
      product.set("detail", data.detail);
      product.set("image", data.image);
      product.set("tag", data.tags.toLowerCase().split(","));
      product.set("nameSearch", data.name.toLowerCase());
      product.set("discountPercentage", 0);
      product.set("enabled", false);
      product.set("isDiscount", false);
      product.set("status", true);
      extraParams.forEach(field => {
        product.set(field, data[field]);
      });
      product.setACL(await this.utils.getACL());
      product = await product.save();
      this.products.push(product);
      success(product);
    } catch (e) {
      error(e);
    }

  }
  public async updateProduct(product, data, fields, success, error) {
    try {
      product = this.utils.parseObjectSetParams(product, data, fields);
      await product.save();
      success();
    } catch (e) {
      error();
    }

  }
  public async deleteProduct(product, success, error) {
    try {
      await product.set("status", false).save();
      let index = this.utils.getIndexOf(this.products,product.id);
      if(index>=0){
        this.products.splice(index,1);
      }
      success();
    } catch (e) {
      error();
    }
  }
}
