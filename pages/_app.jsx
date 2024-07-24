// API Requests
import { getAllProducts } from "@/lib/requests/products/getAllProducts";

// Context Providers
import { CartProvider } from '@/lib/contexts/cart/CartContext';

// CSS
import '@/css/globals.css';

// Core Layout Components
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

function App({ Component, pageProps, products }) {
  return (
    <>
      <CartProvider>
        <Header />
          <Component {...pageProps} products={products} />
        <Footer />
      </CartProvider>
    </>
  )
}

App.getInitialProps = async () => {
  const products = await getAllProducts();
  return { products };
};

export default App;
