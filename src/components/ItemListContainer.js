import customFetch from "../utils/customFetch";
import { useState, useEffect } from "react";
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    customFetch().then(data => setProducts(data)).catch(error=>error);
  }, []);
  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
