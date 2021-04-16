import Products from '../../pages/Product';

const products = [
  {
    id: 1,
    name: 'phone',
    price: 5000,
    count: 10,
  },
  {
    id: 2,
    name: 'phone',
    price: 5000,
    count: 1,
  },
  {
    id: 3,
    name: 'phone',
    price: 5000,
    count: 30,
  },
  {
    id: 4,
    name: 'phone',
    price: 5000,
    count: 6,
  },
  {
    id: 5,
    name: 'phone',
    price: 5000,
    count: 5,
  },
];
console.log(products);
const Content = () => {
  return (
    <div className="content">
      <Products />
    </div>
  );
};
export default Content;
