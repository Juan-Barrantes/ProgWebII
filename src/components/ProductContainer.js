import React from 'react';
import Product from './Product';

const ProductContainer = ({ products, loading }) => {


    return (
        <div className='d-flex justify-content-around align-items-center flex-wrap'>
            {loading ?
                <h2>Cargando... </h2>
                :
                products.map(product =>
                    <Product key={product.id}
                        product = {product} />
                )}

        </div>
    );
}

export default ProductContainer;
