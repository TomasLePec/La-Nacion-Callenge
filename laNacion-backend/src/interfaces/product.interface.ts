export interface IProduct {
  sku: number;
  category_id: number;
  product_name: string;
  description: string;
  price: number;
  status_id: 1 | 2;
}
