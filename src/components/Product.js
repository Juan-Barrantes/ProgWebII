import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg';

const Product = ({product}) => {

    const {id,name, desc,price, stock} = product;

    return (
        <div className="card mb-4" style={{width:"18rem"}}>
            <Link to={`/product/${id}`}>
                <img src={Logo} className="card-img-top" alt="product icon" />
            </Link>

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {desc ? <p className="card-text text-secondary" style={{height:"3rem"}}>{desc}</p> : <hr/>}

                <div className='d-flex flex-row justify-content-between mb-3'>
                    {stock && <div>Stock: {stock}</div>} {/* es un cortocircuito */}
                    {price && <div className='text-danger fw-bold'>S/ {price}</div>}
                </div>
                
                <button className='btn btn-primary w-100'>añadir al carrito</button>
            </div>
      </div>
    );
}

export default Product;
