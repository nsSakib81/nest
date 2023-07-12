import { Module } from '@nestjs/common';
import { productModule } from './product/product.module';

@Module({
  imports: [productModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
