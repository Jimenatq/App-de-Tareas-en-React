import logo from './logo.svg';
import './App.css';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='react-logo-contenedor'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <div className='tarea-lista-principal'>
        <div className='lista-tareas'>
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
        </div>
      </div>
    </div>
  );
}

export default App;
