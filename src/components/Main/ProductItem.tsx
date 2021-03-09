import React, { CSSProperties } from "react";

function ProductItem() {
  return (
    <div style={rootStyle}>
      <div style={imageDiv}>
        <img
          style={imageStyle}
          src="https://shelta.se/pub_images/original/EYT-OACB_1x.jpg?timestamp=1613295294"
          alt=""
        />
      </div>
      <div style={productDiv}>
        <h2>Eytys Odessa Canvas Black</h2>
        <div style={productInfo}>
          <div style={{ margin: "2rem 0" }}>
            <h4>Price</h4>
            <p>1599 sek</p>
          </div>
          <div style={{ margin: "2rem 0" }}>
            <h4>Info</h4>
            <p>
              The brand new Eytys Odessa silhouette is a brutalist
              interpretation of 50´s athletic shoes. A vegan-friendly, easy
              going lace-up style.
            </p>
          </div>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  width: "100%",
  height: "80%",
  background: "white",
  flexWrap: "wrap",
};

const imageDiv: CSSProperties = {
  width: "50%",
  height: "50rem",
};

const productDiv: CSSProperties = {
  padding: '3rem 0',
  flex: 1,
  background: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: 'space-between'
};

const imageStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
};

const productInfo: CSSProperties = {
  height: "50%",
  width: "40%",
};

export default ProductItem;
