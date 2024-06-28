import Meta from '@/utils/Meta'
import SEO from '@/data/meta/seo/defaultSEO'
import FilteredListing from '@/components/products/listings/FilteredListing/Index'

export default function Home({ products }) {

  return (
    <>
      <Meta seo={SEO} />
      <div className="container flex m-auto w-full pt-4">
          <FilteredListing products={products} />        
      </div>
    </>
  );
}

