import { Module } from "@nestjs/common";
import { productService } from "./product.service";
import { ProductController } from "./product.controller";

@Module({

    imports : [],
    controllers : [ProductController],
    providers : [productService]

})
export class productModule{}