import Item from './Item';
import '../../style/Products.css';
import { AdminContext } from '../../contexts/AdminContext';
import { useContext } from 'react';

const ItemList = () => {
  const productDataList = useContext(AdminContext)

    return (
      <div className="product-list">
        <div className="product-container">
            {productDataList.products.map((product: any) => 
              <Item 
                key={product.title}
                product={product}
              />)}
        </div>
      </div>
    );
}

export default ItemList
