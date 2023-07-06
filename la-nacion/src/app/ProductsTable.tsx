'use client';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

import { IProduct } from '@/types/product';
import clsx from 'clsx';

interface IProductsTable {
  className?: string;
  products: IProduct[];
}

export default function ProductsTable({ className, products }: IProductsTable) {
  const rows: GridRowsProp = products;

  const columns: GridColDef[] = [
    { field: 'product_name', headerName: 'Nombre', flex: 1 },
    { field: 'sku', headerName: 'SKU' },
    { field: 'description', headerName: 'Descripción', flex: 1 },
    { field: 'category', headerName: 'Categoria', flex: 0.5 },
    { field: 'status', headerName: 'Estado', width: 150 },
    { field: 'price', headerName: 'Precio' },
  ];
  return (
    <DataGrid
      className={clsx("bg-white w-full", className)}
      columns={columns}
      rows={rows}
      initialState={{
        pagination: { paginationModel: { pageSize: 5 } },
      }}
      pageSizeOptions={[5, 10, 25]}
    />
  );
}
