import React from 'react';

const Product = ({ name, price, thumbnail, description }) => {
    return (
        <div className="card mt-3">
            <img src={thumbnail} className="card-img-top" alt={name.ukr} title={name.ukr}/>
            <div className="card-body">
                <h5 className="card-title">{name.ukr}</h5>
                <h6>Цена: {price}</h6>
                <p className="card-text">{description.ukr.slice(0, 60)}</p>
                <button className="btn btn-primary">Купить</button>
            </div>
        </div>
    );
};

export default Product;