import React from 'react'
import Cart from './components/Cart'
import ProductList from './components/ProductList'

function App() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
          <h1>Shopping Cart</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <ProductList />
        </div>
        <div className="col-md-4">
          <Cart />
        </div>
      </div>
    </div>
  )
}

export default App