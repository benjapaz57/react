import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  //[{},{},{},{}] => recorrer este array y buscar el objeto cuyo id coincida con el id en la url
  const { id } = useParams();

  useEffect(() => {
    customFetch()
      .then((result) => setProducts(result))
      .catch((err) => console.log('error'));
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find(
        (product) => product.id.toString() === id
      );
      setProducts(foundProduct);
    }
  }, [id, products]);

  //useEffect recibe dos cosas 1) una función flecha y 2) un array de dependencias
  //la función flecha se va a ejecutar cuando algo en el array de dependencias cambie
  //useEffect estará atento a cambios en el array de dependencias y ahí va a ejecutar la función flecha
  return <ItemDetail item={products} />;
};

export default ItemDetailContainer;
