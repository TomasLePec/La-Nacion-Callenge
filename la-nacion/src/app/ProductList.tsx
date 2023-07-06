import { productsList } from '@/service/products';
import { IProduct } from '@/types/product';

import ProductsTable from './ProductsTable';

export default async function ProductList() {
  const { data } = await productsList();
  const products: IProduct[] = data;
  return (
    <div className="w-full flex flex-col items-center">
      <ProductsTable products={products} />
    </div>
  );
}
