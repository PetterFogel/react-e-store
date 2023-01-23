import { Link } from "react-router-dom";
import { Product } from "../../data/productData";
import { routeFactory } from "../../route-factory/routeFactory";
import "../../style/Products.css";

interface Props {
  product: Product;
}
const Item = (props: Props) => {
  return (
    <div className="product-item">
      <h2 className="title">{props.product.title}</h2>
      <img className="product-image" src={props.product.image} alt="" />
      <h4 className="price">{props.product.price + " sek"}</h4>
      <Link to={routeFactory.productScreen.productDetails(props.product.title)}>
        <button className="add-btn">More info...</button>
      </Link>
    </div>
  );
};

export default Item;
