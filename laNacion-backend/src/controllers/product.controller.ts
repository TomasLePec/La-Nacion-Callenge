import { NextFunction, Request, Response } from 'express';
import ProductService from '../services/product.service';
import { success } from '../success/constants';
import { IProduct } from '../interfaces/product.interface';

class ProductController {
  public productService = new ProductService();

  public getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string);
      const status = req.query.status as string;
      const products = await this.productService.getAll(page | 1, status);
      res.status(success.SUCCESS_GET).json({ data: products, message: 'All Products' });
    } catch (error) {
      next(error);
    }
  };

  public getProductById = async (
    req: Request<{ id: number }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const productId = req.params.id;
      const product = await this.productService.getById(productId);
      res.status(success.SUCCESS_GET).json({ data: product, message: 'Product' });
    } catch (error) {
      next(error);
    }
  };

  public createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productData: IProduct = req.body;
      const newProduct = await this.productService.createProduct(productData);
      res.status(success.SUCCESS_POST).json({ data: newProduct, message: 'New Product Created' });
    } catch (error) {
      next(error);
    }
  };

  public updateProduct = async (
    req: Request<{ id: number }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const productId = req.params.id;
      const newData = req.body;
      const updatedProduct = await this.productService.updateProduct(productId, newData);
      res.status(success.SUCCESS_PUT).json({ data: updatedProduct, message: 'Produc Updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteProduct = async (
    req: Request<{ id: number }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const productId = req.params.id;
      const deletedProduct = await this.productService.deleteProduct(productId);
      res.status(success.SUCCESS_DELETE).json({ data: deletedProduct, message: 'Product Deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ProductController;
