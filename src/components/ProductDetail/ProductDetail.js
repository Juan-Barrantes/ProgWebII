import React from 'react'
import './ProductDetail.css';

export const ProductDetail= ({product}) => {
  const urlDefault = "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg";
  return (
    <div className='product-detail d-flex justify-content-center align-items-center p-5'>
        <div className='product-detail--gallery w-50 h-100 p-2' style={{backgroundImage: `url(${product?.img || urlDefault})`}}>
            
        </div>
        {product ? 
        <div className='product-detail--info w-50 h-100 px-4'>
          <h2>{product.name}</h2>
          <p className='text-muted'>{product.id}</p>
          <p>{product.longDesc}</p>          
          <div className='d-flex justify-content-between align-items-center  my-4'>
            <div className='product-detail--info_stock text-primary'> <b>Stock: {product.stock}</b></div>
            <div className='product-detail--info_price text-end'><b>s/. {product.price}</b></div>            
          </div>
          <div className='d-flex justify-content-end align-items-end'>
            <button className='btn btn-primary me-4'>Agregar a favoritos ❤</button>
            <button className='btn btn-success'>Agregar al carrito 🛒</button>
          </div>
          
          
        </div> : <h2>Cargando info de producto ... </h2> }
    </div>
  )
}
export default ProductDetail;
