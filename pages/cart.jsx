
import Meta from '@/utils/Meta'
import SEO from '@/data/meta/seo/defaultSEO'
import CartTable from '@/components/cart/CartTable'

export default function Home({ products }) {

  return (
    <>
      <Meta seo={SEO} />
      <div className="container flex m-auto w-full p-4 sm:!pt-6">
          <CartTable products={products} />        
      </div>
    </>
  );
}

