import Item from "./Item"

const ItemDetail = ({products}) => {
    return(
        <>
            {products.map((product) => (
                <div key={product.id}>
                    <Item product={product} />
                </div>
            ))}
        </>
    )
}

export default ItemDetail