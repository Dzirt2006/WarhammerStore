import React from 'react';

const Product = props => {
    const product = props.staff;
    return (
        <div className='robotCard' key={product.id}>
            {/* <Link to={{ pathname: `/robots/${robot.id}` }}><h3 > {robot.name} </h3> </Link> */}
            <h3>Name: {product.name}</h3>
            <img src={product.imageUrl} />
            <p>description:{product.description}</p>
            <p>amount: {product.total_amount}</p>
            <p>price: {product.price}</p>
            <button onClick=''>Buit It!</button>
        </div>
    )
};

export default Product;