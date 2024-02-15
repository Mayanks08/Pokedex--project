import Pokedex from './components/Pokedex/Pokedex'
import './App.css'
import CoustomRoutes from './routes/coustomRoutes'
import { Link } from 'react-router-dom'

function App() {
  

  return (
    <div className='pokemon-apps'>
    <h1 className='pokedex-h1'>
     <Link to='/'>POKEDEX</Link> 
      </h1>
    <CoustomRoutes/>  
    </div>
  )
}

export default App
