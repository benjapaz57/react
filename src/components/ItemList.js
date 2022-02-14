import Item from "./Item";

/* const ItemList = (props) => {
    const age = props.age;
    const name = props.name;
    const products = props.products */

/* const ItemList = (props) => {
        const { age, name, products } = props; */

const ItemList = ({ products }) => {
  // products es un array de objetos [{obj1}, {obj2}, ..., {objN}]
  // quiero renderizar un Item por cada objeto
  console.log("estoy en ItemList y los products son ", products);
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
