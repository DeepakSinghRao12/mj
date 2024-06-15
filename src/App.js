import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Contact from './components/Pages/Contact';
import Login from './components/Pages/Login';
import Aboutus from './components/Pages/Aboutus';
import Register from './components/Pages/Register';
import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home';
import Product from './components/Modules/Product';
import Cart from './components/Pages/Cart';
import LearnHooks from './components/Modules/LearnHooks';
import Add from './components/Pages/Admin/Category/Add';
import CategoryList from'./components/Pages/Admin/Category/List';





const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/LearnHooks" element={<LearnHooks/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/list" element={<CategoryList/>}/>
        </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
