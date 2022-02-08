import { useState } from "react";

const ItemCount = () => {

//let amount = 0;
    const [ quantity, setQuantity ] = useState( 0 );

    const increment = () => {
        setQuantity( quantity + 1 );
    }
//    const decrement = () => {
//        quantity -= 1;
//    }


        return(
            <div>
                <button onClick = { increment }>+</button>
                <p>{quantity}</p>
                {/* <button onClick = { decrement }>-</button> */}
                <button>Add to cart</button>
            </div>
    );
}

export default ItemCount;