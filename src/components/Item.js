import { Link } from 'react-router-dom';

// componente empieza con mayúscula
const Item = ({ product }) => {
  const { description, price, title, id, category } = product;
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>{price}</h3>
      <h5>{category}</h5>
      <img
        src='https://mipangea.com/wp-content/uploads/2021/01/favicon-pangea-300x300.png'
        alt='couldnt load'
      />
      <Link to={`item/${id}`}>
        <button>Detalle</button>
      </Link>
    </>
  );
};

export default Item;
