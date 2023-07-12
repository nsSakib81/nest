import { Injectable } from "@nestjs/common";
import { product } from "./data/product.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class productService {
    public products : product[] = [];
   
    addProductService(product : product) : string {
        product.productId = uuidv4();
        this.products.push(product);
        return "Your product is added successfully";
    }


    updateProductService(product : product) : string {
        let index = this.products.findIndex((currentProduct)=>{
            return currentProduct.productId == product.productId;
        });
        this.products[index] = product;
        return "product updated successfully";
    }


    deleteProductService(productId : string) : string{
        this.products = this.products.filter((product)=>{
            return product.productId != productId;
        });
        return "product deleted";
    }


    findAllProducts(): product[] {
        return this.products;
    }
}