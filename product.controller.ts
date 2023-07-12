import { Body, Controller, Get, Put, Delete, Param, Post } from "@nestjs/common";
import { productService } from "./product.service";
import { product } from "./data/product.dto";

@Controller("productName")
export class ProductController{
    constructor(private productService : productService){

    }

    @Get("/findAll")
    getAllProducts() : product[]{
        return this.productService.findAllProducts();
    }


    @Put("/update")
    updateProducts(@Body() product : product) : string{
        return this.productService.updateProductService(product);
    }


    @Delete("/delete/:productId")
    deleteProducts(@Param("productId") productId : string) : string{
        return this.productService.deleteProductService(productId);
    }


    @Post("/add")
    addProducts(@Body() product : product) : string{
        return this.productService.addProductService(product);
    }
}