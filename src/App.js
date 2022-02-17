import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element= {<ItemListContainer />} />
      <Route path='/category/:idCategory' element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
