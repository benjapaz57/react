import cart from "../components/cart.png";

const CartWidget = () => {
    return(
        <div>
            <section className="cart-widget">
                <img src={cart} alt='cart-widget'></img>
            </section>
        </div>
    )
}

export default CartWidget;