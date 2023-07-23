import ProductViewPage from '@/components/products/ProductViewPage';

interface IProps {
  params: {
    slug: string;
  };
}

const ProductPage = async ({ params }: IProps) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="px-5 py-24">
        <ProductViewPage slug={params.slug} />
      </div>
    </section>
  );
};

export default ProductPage;
