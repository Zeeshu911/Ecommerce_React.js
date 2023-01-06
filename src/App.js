import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import ViewProduct from './Components/ViewProduct';
import { commerce } from './lib/commerce';
import Favorites from './Components/Favorites';
import Thanks from './Components/Thanks';


const App = () => {

  const [products, setProducts] = useState([]);

  const fetchProducts = async ()=>{
    const {data} = await commerce.products.list();

    data.forEach(function (element) {
      element.quantity = 1;
    });

    setProducts(data);
    console.log(data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home products={products}/>}/>
        <Route path="/products" element={<Products products={products}/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/viewProduct" element={<ViewProduct/>}/>
        <Route path="/favoriteProducts" element={<Favorites/>}/>
        <Route path='/thanksgiving' element={<Thanks/>}/>
        <Route/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
