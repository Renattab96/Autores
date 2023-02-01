import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
// import Dashboard from './components/Dashboard';
// import Detalles from './components/Detalles';
// import MasDetalle from './components/MasDetalle';
import AutorList from './components/AutorList';
import Agregar from './components/Agregar';
import Editar from './components/Editar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <h2>Autores Favoritos</h2>
        <ul>
          <li><Link to={'/autorlist/:id'}>Autor List</Link></li>
          <li><Link to={'/agregar'}>Agregar</Link></li>
          <br />
        </ul>
      </header>
      <Routes>
        <Route index element={<AutorList />} />
        <Route path='/autorlist/:id' element={<AutorList/>} />
          <Route path='/agregar' element={<Agregar />} />
          <Route path='/editar/:id' element={<Editar/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
