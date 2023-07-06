import { Router } from 'express';
import { Routes } from '../interfaces/routes.interface';
import productController from '../controllers/product.controller';
import validateSchemaMiddleware from '../middlewares/validateSchemas.middleware';
import { Product } from '../joi/product.schema';

class ProductRoute implements Routes {
  public path = '/products';
  public router = Router();
  public ProductController = new productController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.ProductController.getAllProducts);
    this.router.get(`${this.path}/:id`, this.ProductController.getProductById);
    this.router.post(
      `${this.path}`,
      validateSchemaMiddleware(Product),
      this.ProductController.createProduct,
    );
    this.router.put(
      `${this.path}/:id`,
      validateSchemaMiddleware(Product),
      this.ProductController.updateProduct,
    );
    this.router.delete(`${this.path}/:id`, this.ProductController.deleteProduct);
  }
}

export default ProductRoute;
