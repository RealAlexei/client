import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Start from './components/Start/Start';
import Book from './components/Book/Book';
import ProductForm from './components/Products/ProductForm/ProductForm';
import DashboardMainPage from './components/Dashboard/DashboardMainPage';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/start" element={<Start/>}/>
        <Route path="/dishes" element={<Products/>}/>
        <Route path="/book" element={<Book/>}/>
        <Route path="/dishes_form" element={<ProductForm/>}/>
        <Route path="/dishes_form/:id" element={<ProductForm/>}/>
        <Route path="/dashboard" element={<DashboardMainPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
