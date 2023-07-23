import { getAllProductsFn } from '@/api/productApi';
import ProductCard from '@/components/products/ProductCard';

const productsPage = async () => {
  const data = await getAllProductsFn();

  if (data.status !== 200)
    return <h1>Something went wrong, please try again</h1>;

  return (
    <section className="px-2 md:px-5 mx-auto max-w-7xl">
      <div className="text-gray-600 body-font">
        <h1 className="text-4xl py-4">All Products</h1>
        <div className="container px-0 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data?.data?.products?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default productsPage;
