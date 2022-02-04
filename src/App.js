import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import './App.css';

function App() {
  return (
    <>
        <Navbar />
        <ItemListContainer greeting={'Somos la mejor tienda'} />
    </>
  );
}

export default App;
