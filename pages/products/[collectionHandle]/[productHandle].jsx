import React from 'react';
import Meta from '@/utils/Meta'
import { getAllProducts } from '@/lib/requests/products/getAllProducts'
import Product from '@/components/products/product/Product';
import { ProductProvider } from '@/lib/contexts/product/ProductContext';

const ProductPage = ({ product }) => {
  return (
    <>
      <Meta seo={product.seo} />
      <ProductProvider product={product}>
        <Product /> 
      </ProductProvider>
    </>
  );
};

const products = await getAllProducts();

export async function getStaticPaths() {

  const paths = products.flatMap((product) =>
    product.node.collections.map((collection) => ({
      params: {
        collectionHandle: collection.node.handle,
        productHandle: product.node.handle
      }
    }))
  );

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { collectionHandle, productHandle } = params;
  const product = products.find(
    (product) =>
      product.node.handle === productHandle &&
      product.node.collections.some((collection) => collection.node.handle === collectionHandle)
  );

  if (!product) {
    return { notFound: true };
  }

  return { props: { product: product.node, collectionHandle } };
}

export default ProductPage;
