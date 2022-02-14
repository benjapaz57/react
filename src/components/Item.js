// componente empieza con mayúscula
const Item = ({product}) => {
  const { description, price, title } = product;
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>{price}</h3>
      <img src='https://mipangea.com/wp-content/uploads/2021/01/favicon-pangea-300x300.png' alt='couldnt load' />
    </>
  );
};

export default Item;
