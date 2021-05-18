import { useContext } from "react";
import { Product } from "../../../data/productData";
import "../../../style/Checkout.css";
import "../../../style/Admin.css";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { AdminContext } from "../../../contexts/AdminContext";
import { Link } from "react-router-dom";
import { adminIcons } from "../../../style/GeneralStyle";

function AdminHandler() {
  const admin = useContext(AdminContext);
  
  return (
    <div className="admin-handler-container">
      {admin.products.map((product: Product) => (
        <div className="admin-item">
          <img className="imageStyle" src={product.image} alt="of product" />
          <p className="admin-title">{product.title}</p>
          <div className="info-admin-container">
              <h4 className="admin-price">{`${product.price} SEK`}</h4>
            <p className="admin-info">{product.info}</p>
          </div>
          <div>
            <DeleteOutlinedIcon
              style={adminIcons}
              onClick={() => admin.removeItem(product)}
            />
            <Link to={"/editProduct/" + product.title}>
              <CreateOutlinedIcon
                style={adminIcons}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminHandler;
