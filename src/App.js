import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting="¡Bienvenidos!" />}></Route>
          <Route exact path="/category/:categoryId" element={<ItemListContainer />}></Route>
          <Route exact path="/item/:itemId" element={<ItemDetailContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
