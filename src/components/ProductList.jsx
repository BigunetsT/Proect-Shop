import ProductItem from './ProductItem';

const ProductList = ({ products }) => (
  <ul className="list">
    {products.map(
      product =>
        !!product.count && <ProductItem key={product.id} product={product} />,
    )}
  </ul>
);

export default ProductList;
