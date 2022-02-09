import { useState } from "react";

const ItemCount = ({ stock, initialValue }) => {

    const [ quantity, setQuantity ] = useState( 0 );

    const increment = () => {
        if ( quantity < stock ) setQuantity ( quantity + 1);
    }
    const decrement = () => {
        if ( quantity > initialValue ) setQuantity ( quantity - 1);
    }


        return(
            <div>
                <button onClick = { increment }> + </button>
                <p> { quantity } </p>
                <button onClick = { decrement }> - </button>
                <button> Add to cart </button>
            </div>
    );
}

export default ItemCount;