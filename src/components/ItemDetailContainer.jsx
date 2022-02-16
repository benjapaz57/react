import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import customFetch from "./utils/customFetch"
const { products } = require('./products')

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    useEffect(() => {
        customFetch (2000, products[3])
            .then(result => setDato(result))
            .catch(err => console.log('error'))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;