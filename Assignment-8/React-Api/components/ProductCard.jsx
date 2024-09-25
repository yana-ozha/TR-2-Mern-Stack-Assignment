import React from 'react';

const ProductCard = ({ product }) => {
    const { image, title, price, description } = product;

    return (
        <div className="product-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
        </div>
    );
};

export default ProductCard;
