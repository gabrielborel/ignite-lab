import { CreateProductInput } from './inputs/create-product-input';
import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '../auth/authorization.guard';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Product } from './models/product';
import { ProductsService } from '../../services/products.service';

@Resolver('products')
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  products() {
    return this.productsService.listAllProducts();
  }

  @Mutation(() => Product)
  @UseGuards(AuthorizationGuard)
  createProduct(@Args('data') data: CreateProductInput) {
    return this.productsService.createProduct(data);
  }
}
