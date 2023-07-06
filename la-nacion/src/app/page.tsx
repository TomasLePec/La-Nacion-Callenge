import ProductList from './ProductList';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* @ts-expect-error Server Component */}
      <ProductList />
    </main>
  );
}
