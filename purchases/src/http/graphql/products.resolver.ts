import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '../auth/authorization.guard';
import { Resolver, Query } from '@nestjs/graphql';
import { Product } from './models/product';
import { ProductsService } from '../../services/products.service';

@Resolver('products')
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  @UseGuards(AuthorizationGuard)
  products() {
    return this.productsService.listAllProducts();
  }
}
