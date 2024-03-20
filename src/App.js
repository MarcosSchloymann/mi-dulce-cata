import initialProducts from './mocks/products.json'
import Products from "./components/Products";
import { useState } from 'react';
// import Header from './components/Header';
import Footer from './components/Footer';
import { useFilters } from './Hooks/useFilters';
import Portada from './components/Portada';
import Promociones from './components/Promociones';
import Navbar from './components/Navbar';
import Form from './components/Form';



function App() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Portada />
      <Navbar/>
      <div className='cuerpe'>
        {/* <Header /> */}
        <Products products={filteredProducts} />
      </div>
      <div className='lineas'></div>
      <Promociones />
      <div className='lineas'></div>
      <div className='cuerpe'>
        <Form/>
      </div>
      <Footer />
    </>
  )
}

export default App;
