/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Category } from '../databases/models/category.model';
import { Product } from '../databases/models/products.model';
import { Status } from '../databases/models/status.model';
import { errors } from '../errors/constants';
import { HttpException } from '../exceptions/HttpException';
import { IProduct } from '../interfaces/product.interface';
import { isEmpty } from '../utils/utils';

interface IProductResponse extends IProduct {
  id: number;
  Category: { name: string };
  Status: { name: string };
  createdAt: Date;
  updatedAt: Date;
}

class ProductService {
  public productModel = Product;

  public async getAll(page: number, status: string) {
    const filter: any = {};
    if (status) {
      if (status === 'habilitado') {
        filter.status_id = 1;
      } else if (status === 'deshabilitado') {
        filter.status_id = 2;
      }
    }
    const products = (await this.productModel.findAll({
      include: [
        { model: Category, attributes: ['name'] },
        { model: Status, attributes: ['name'] },
      ],
      attributes: {
        exclude: ['category_id', 'status_id'],
      },
      limit: 25,
      offset: (page - 1) * 25,
      where: filter,
    })) as Partial<IProductResponse>[];
    const transformProducts = products.map((product) => ({
      id: product.id,
      sku: product.sku,
      product_name: product.product_name,
      description: product.description,
      price: product.price,
      category: product.Category.name,
      status: product.Status.name,
    }));
    return transformProducts;
  }

  public async getById(id: number) {
    if (isEmpty(id)) throw new HttpException(errors.MISSING_ID.httpCpde, errors.MISSING_ID.message);
    const product = (await this.productModel.findByPk(id, {
      include: [
        { model: Category, attributes: ['name'] },
        { model: Status, attributes: ['name'] },
      ],
    })) as Partial<IProductResponse>;
    if (!product)
      throw new HttpException(errors.RESOURCE_NOT_FOUND.httpCode, "Product doesn't exist");

    const tranformProduct = {
      id: product.id,
      sku: product.sku,
      product_name: product.product_name,
      description: product.description,
      price: product.price,
      category_id: product.category_id,
      status_id: product.status_id,
      category: product.Category.name,
      status: product.Status.name,
    };

    return tranformProduct;
  }

  public async createProduct(data: IProduct) {
    if (isEmpty(data))
      throw new HttpException(errors.EMPTY_DATA.httpCode, errors.EMPTY_DATA.message);
    const categoryCount = await Category.count();
    if (categoryCount < data.category_id)
      throw new HttpException(
        errors.EMPTY_DATA.httpCode,
        'category_id not belongs to any Category.',
      );
    const newProduct = await this.productModel.create({ ...data });
    return newProduct;
  }

  public async updateProduct(id: number, data: IProduct) {
    if (isEmpty(id)) throw new HttpException(errors.MISSING_ID.httpCpde, errors.MISSING_ID.message);
    const categoryCount = await Category.count();
    if (isEmpty(data))
      throw new HttpException(errors.EMPTY_DATA.httpCode, errors.EMPTY_DATA.message);
    if (categoryCount < data.category_id)
      throw new HttpException(
        errors.EMPTY_DATA.httpCode,
        'category_id not belongs to any Category.',
      );

    const product = await this.productModel.findByPk(id);
    if (!product)
      throw new HttpException(errors.RESOURCE_NOT_FOUND.httpCode, "Product doesn't exist");

    const updatedProduct = await product.update({ ...data });
    return updatedProduct;
  }

  public async deleteProduct(id: number) {
    const product = await this.productModel.findByPk(id);
    if (!product)
      throw new HttpException(errors.RESOURCE_NOT_FOUND.httpCode, "Product doesn't exist");

    const deletedProduct = await product.destroy();
    return deletedProduct;
  }
}

export default ProductService;
