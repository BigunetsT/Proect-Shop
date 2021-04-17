import ProductList from '../components/ProductList.jsx';

const products = [
  {
    id: 1,
    name: 'phone',
    price: 5000,
    count: 10,
    img: 'https://rusmonitor.com/wp-content/uploads/2018/01/4142.jpg',
  },
  {
    id: 2,
    name: 'phone',
    price: 5000,
    count: 1,
    img: 'https://rusmonitor.com/wp-content/uploads/2018/01/4142.jpg',
  },
  {
    id: 3,
    name: 'phone',
    price: 5000,
    count: 30,
    img: 'https://rusmonitor.com/wp-content/uploads/2018/01/4142.jpg',
  },
  {
    id: 4,
    name: 'phone',
    price: 5000,
    count: 6,
    img: 'https://rusmonitor.com/wp-content/uploads/2018/01/4142.jpg',
  },
  {
    id: 5,
    name: 'phone',
    price: 5000,
    count: 0,
    img: 'https://rusmonitor.com/wp-content/uploads/2018/01/4142.jpg',
  },
];

const Products = () => {
  return (
    <div className="products">
      <ProductList products={products} />
    </div>
  );
};

export default Products;
