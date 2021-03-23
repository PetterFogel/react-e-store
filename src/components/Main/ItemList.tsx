import Item from './Item';
import '../../style/Products.css';
import { ProductData } from '../../data/productData'



const ItemList = () => {

  const ProductDataList = JSON.parse(localStorage.getItem("ProductData") || "[]")

    return (
      <div className="product-list">
        <div className="product-container">
            {ProductDataList.map((product: any) => 
              <Item 
                key={product.title}
                product={product}
              />)}
        </div>
      </div>
    );
}

export default ItemList
