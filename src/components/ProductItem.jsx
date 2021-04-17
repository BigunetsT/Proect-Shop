const ProductItem = ({ product }) => (
  <li className="item">
    <p>Name: {product.name}</p>
    <p>Price: {product.price}</p>
    <p>Count: {product.count}</p>
    <img className="img" src={product.img} alt={product.name} />
  </li>
);

export default ProductItem;
