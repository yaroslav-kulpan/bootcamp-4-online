const ProductsGrid = ({ products }) => {
    const items = products.map(({ _id, name, price, thumbnail }) => (
        <div className="col-4" key={_id}>
            <article className="product">
                <img src={thumbnail} alt="product"/>
                <h5>{name.ukr}</h5>
            </article>
        </div>
    ));

    return (
        <div className="container">
            <div className="row">
                {items}
            </div>
        </div>
    );
};

export default ProductsGrid;