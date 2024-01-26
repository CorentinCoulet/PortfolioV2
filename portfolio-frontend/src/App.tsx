import './App.scss'
import { BrowserRouter } from 'react-router-dom';
import GlobalPresentation from './pages/GlobalPresentation';
import Navbar from './pages/NavBar';
import Objectifs from './pages/Objectifs';
import Particles from './components/Particles.tsx';

function App() {

  return (
    <BrowserRouter>
      
      <div className="App">
        {/* <Navbar /> */}
        {/* <GlobalPresentation />
        <Objectifs /> */}
        <Particles id="tsparticles" />
      </div>
    </BrowserRouter>
  )
}

export default App
