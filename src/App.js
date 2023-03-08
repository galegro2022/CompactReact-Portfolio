import { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe.js';
import Contacts from './components/Contacts.js';
import Portfolio from './components/Portfolio.js';
import Resume from './components/Resume.js';
import Navbar from './components/Navbar.js';

function App() {
  const [currentPage, setCurrentPage] = useState('About Me');
  function switchPage () {
    if (currentPage === "About Me"){
      return <AboutMe />
    }
    else if (currentPage === "Resume"){
      return <Resume />
    }
    else if (currentPage === "Portfolio"){
      return <Portfolio />
    }
    else if (currentPage === "Contact"){
      return <Contacts />
    }
  }
  return (
    <div className="App">
      <Navbar setCurrentPage = {setCurrentPage}/>
      {switchPage()}
    </div>
  );
}

export default App;
