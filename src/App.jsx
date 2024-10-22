import { HashRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Layout from './layouts/Layout/Layout'

import Home from './pages/Home/Home'
import Calculator from './pages/Calculator/Calculator'
import Todo from './pages/Todo/Todo'
import { fetchProduct } from './data/product'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Animation from './pages/Animation/Animation'

import Login from './pages/Login/Login'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import './App.css'
import Component from './pages/Components/Component'



function App() {

  const [token, setToken] = useState('')
  const [role,setRole] = useState('')

  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  useEffect(() => setProducts(fetchProduct()), [])

  useEffect(() => console.log(products), [products])

  if (token == '') {
    return (<Login setToken={setToken} setRole={setRole} />)
  } else {
    return (
      <div className="app-container">
        <HashRouter>
          <Routes>
            <Route element={<Layout products={products} carts={carts} setToken ={setToken} />}>
              <Route path={'/'} element={<Home />} />
              <Route path={'/home'} element={<Home />} />
              <Route path={'/calculator'} element={<Calculator />} />
              <Route path={'/animation'} element={<Animation />} />
              <Route path={'/component'} element={<Component />} />
              <Route path={'/todo'} element={<Todo />} />
              <Route path={'/product'} element={<Product products={products} carts={carts} setCarts={setCarts} />} />
              <Route path={'/cart'} element={<Cart carts={carts} setCarts={setCarts} />} />
              
            </Route>
          </Routes>
        </HashRouter>
      </div>
    )
  }
}

export default App
