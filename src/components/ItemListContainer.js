import ItemCount from "./ItemCount"
import itemList from "./ItemList";

const ItemListContainer = () => {
    return (
        <itemList />
        <ItemCount stock = { 5 } initialValue = { 1 } />
    )
}

export default ItemListContainer;