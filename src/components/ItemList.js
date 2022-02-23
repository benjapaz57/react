import Item from './Item';
import './itemList.css';
const ItemList = ({ products }) => {
  // products es un array de objetos [{obj1}, {obj2}, ..., {objN}]
  // quiero renderizar un Item por cada objeto
  return (
    <div className='itemlist'>
      {products.map((product) => (
        <div key={product.id} className='item-container'>
          <Item product={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
