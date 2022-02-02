import 'bootstrap/dist/css/bootstrap.min.css';
import './CartWidget';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-secondary bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">SDE-Wallets</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Formas de Pago</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Nosotros</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contacto</a>
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