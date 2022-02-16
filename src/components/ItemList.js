import Item from "./Item";

const ItemList = ({ products }) => {
  // products es un array de objetos [{obj1}, {obj2}, ..., {objN}]
  // quiero renderizar un Item por cada objeto
  return (
    <>
      {products.map((product) => (
          <div key={product.id}>
              <Item product={product} />
          </div>
      ))}
    </>
  );
};

export default ItemList;
