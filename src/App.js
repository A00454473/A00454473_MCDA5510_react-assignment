import React, { useState } from "react";

import './App.css';
import './about';
import About from './about';
import City from './city';

function App() {

  const [nav, setNav] = useState("about");

  return (
    <div>

      <div className="navigation">
        <a className={nav === "about" ? "active":""} href="#" onClick={() => setNav("about")}>
          About Me
        </a>
        <a className={nav === "city" ? "active":""} href="#" style={{marginLeft: '2em'}}
              onClick={() => setNav("city")}>
          My City
        </a>
      </div>

      <div style={{paddingTop: '5em', textAlign: 'center'}}>
        {nav === "about" ? <About></About> : <City></City>}
      </div>
      
    </div>
  );
}

export default App;
