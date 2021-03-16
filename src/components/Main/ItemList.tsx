import Item from './Item';
import '../../style/Products.css';
import { ProductData } from '../../data/productData'



const ItemList = () => {
    return (
      <div className="product-list">
        <div className="product-container">
            {ProductData.map((product) => 
              <Item 
                key={product.title}
                product={product}
              />)}
        </div>
      </div>
    );
}

export default ItemList
