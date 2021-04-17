import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';

const ProductItem = ({ product }) => (
  <li className="item">
    <CardActionArea>
      <Card className="card">
        <p className="item-name">Name: {product.name}</p>
        <p className="item-price">Price: {product.price}</p>
        <p className="item-count">Count: {product.count}</p>
        <img className="img" src={product.img} alt={product.name} />
      </Card>
    </CardActionArea>
    <IconButton>
      <AddShoppingCartIcon className="addShoppingIcon" />
    </IconButton>
  </li>
);

export default ProductItem;
