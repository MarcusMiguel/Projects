import TopBar from './Components/TopBar/TopBar';
import Projects from  './Components/Projects/Projects';
import About from  './Components/About/About';
import Menu from  './Components/Menu/Menu';

import './App.scss';
import React, {useState} from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState("All")

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
        <About/>
        <Projects activeProject={activeProject} setActiveProject={setActiveProject} />
      </div>
    </div>
  );
}

export default App;
