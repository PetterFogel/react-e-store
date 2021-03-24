import { useContext } from "react";
import { Product } from "../../../data/productData";
import "../../../style/Checkout.css";
import "../../../style/Admin.css";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { AdminContext } from "../../../contexts/AdminContext";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

function AdminHandler() {
  const admin = useContext(AdminContext);
  
  return (
    <div className="admin-handler-container">
      {admin.products.map((product: Product) => (
        <div className="admin-item">
          <img className="imageStyle" src={product.image} />
          <p className="admin-title">{product.title}</p>
          <div className="info-admin-container">
            {admin.mode == "editPrice" ? (
              <div>
                <input
                  type="number"
                  placeholder="set new price"
                  onChange={admin.addNewPrice}
                />
                <CheckBoxIcon onClick={() => admin.submitPrice(product)} />
              </div>
            ) : (
              <h4 className="admin-price">{`${product.price} SEK`}</h4>
            )}
            <p className="admin-info">{product.info}</p>
          </div>
          <div style={{ width: "1rem" }}>
            <DeleteOutlinedIcon
              style={{ fontSize: "2rem", cursor: "pointer" }}
              onClick={() => admin.removeItem(product)}
            />
            <CreateOutlinedIcon
              style={{ fontSize: "2rem", cursor: "pointer" }}
              onClick={() => admin.editMode("editPrice")}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminHandler;
