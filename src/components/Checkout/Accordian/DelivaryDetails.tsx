import { CSSProperties } from "react";
import Dhl from "./DeliveryDetails/Dhl";
import Bring from "./DeliveryDetails/Bring";
import PostNord from "./DeliveryDetails/PostNord";

const DelivaryDetails = () => {
  return (
    <div>
      <div style={form}>
        <div style={{ marginBottom: "1rem" }}>Delivery Details</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <PostNord />
          <Bring />
          <Dhl />
        </div>
      </div>
    </div>
  );
};

const form: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem 2rem",
  background: "lightgrey",
  fontSize: "1.2rem",
  padding: "1rem 4rem",
  boxShadow: "1px 1px 3px grey",
  borderRadius: ".5rem",
};
export default DelivaryDetails;
