import './App.scss'
import { BrowserRouter } from 'react-router-dom';
import GlobalPresentation from './pages/GlobalPresentation';
import Navbar from './pages/NavBar';
import Objectifs from './pages/Objectifs';
import Particles from './components/Particles.tsx';
import Profil from './pages/Profil.tsx';
import Parcours from './components/Parcours.tsx';
import Contact from './pages/Contact.tsx';

function App() {

  return (
    <BrowserRouter>
      {/*<Particles id="tsparticles" />*/}
      <div className="App">
        <Navbar />
        <GlobalPresentation />
        <Objectifs />
        <Profil />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
