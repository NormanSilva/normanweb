import './App.css';
import About from './Components/About/About';
import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar';
import Tecnicas from './Components/Tecnicas/Tecnicas';


function App() {





  return (
    <>
      <div className='App'>
        
        <div>
          <NavBar/>
        </div>
        
        <Hero/>
        <About/>
        <Tecnicas/>
      
        <div>Técnicas y Habilidades</div>
        <div>Portfolio</div>
        <div>Fotografia</div>
        <div>Footer</div>
      </div>
      

    
    </>
    
  );
}

export default App;
