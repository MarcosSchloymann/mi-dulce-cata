import './Products.css'
// import { AddToCartIcon } from './Icon'

import React from 'react'

const Products = ({products}) => {
  return (
    <main className='products'>
         <ul>
            {products.slice(0,10).map(product=>(
                <li key={product.id}>
                    <img 
                    src={product.thumbnail} 
                    alt={product.title} />
                    <div className='titulo-precio'>
                        <strong>{product.title}</strong> - ${product.price}
                    </div>
                    <div className='button'>
                        <button>
                            Consultar
                            {/* <AddToCartIcon/> */}
                        </button>
                    </div>
                </li>
            ))}
         </ul>
    </main>
  )
}

export default Products