import { Link } from "react-router-dom";
import { Product } from "../../../data/productData";
import { useContext } from "react";
import { adminIcons } from "../../../style/GeneralStyle";
import { routeFactory } from "../../../route-factory/routeFactory";
import { AdminContext } from "../../../contexts/AdminContext";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import "../../../style/Checkout.css";
import "../../../style/Admin.css";

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
            <DeleteOutlineIcon
              style={adminIcons}
              onClick={() => admin.removeItem(product)}
            />
            <Link to={routeFactory.adminScreen.editProduct(product.title)}>
              <EditIcon style={adminIcons} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminHandler;
