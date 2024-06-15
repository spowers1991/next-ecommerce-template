import Meta from '@/utils/Meta'
import SEO from '@/data/meta/seo/defaultSEO'
import ProductListings from '@/components/products/listings/ProductListings'

export default function Home({ products }) {

  return (
    <>
      <Meta seo={SEO} />
      <div className="container flex m-auto w-full pt-4">
          <ProductListings products={products} />        
      </div>
    </>
  );
}

