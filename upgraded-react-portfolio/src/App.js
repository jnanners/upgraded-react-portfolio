import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeDisplay, setActiveDisplay] = useState("About")

  const displaySection = () => {
    switch(activeDisplay){
      case "About":
        return <About></About>;
      case "Portfolio":
        return <Portfolio></Portfolio>;
      case "Contact":
        return <ContactForm></ContactForm>;
      default:
        return <About></About>
    }
  }
  
  return (
    <div>
      <Nav
        activeDisplay={activeDisplay}
        setActiveDisplay={setActiveDisplay}
      ></Nav>
      <main>
        {displaySection(activeDisplay)}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
