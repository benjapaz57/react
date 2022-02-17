import 'bootstrap/dist/css/bootstrap.min.css';
import './CartWidget';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-secondary bg-dark">
                <div class="container-fluid">
                    <Link to='/'>SDE-Wallets</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to='/category/'>Productos</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/category/'>Formas de Pago</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/category/'>Contacto</Link>
                            </li>
                            <CartWidget />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};


export default Navbar;