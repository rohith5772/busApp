import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './details.css';



export default function DetailingPage(){
    const next = useNavigate();
    const location = useLocation();
    return <div>
       
       {/* <div>{location.state[0]}</div>
       <div>{location.state[1]}</div>
       <div>{location.state[2]}</div>
        <button onClick={() => { next("/") }}>Back To Home</button> */}
        {/* {location.state.map((bus: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, index: number) => (
        <div key={index}>
          <p>{index}. {bus.name}</p>
        </div>
      ))} */}
  <header>
      <h1>Citymapper Bus Route Stops</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Routes</a></li>
          <li><a href="#">Buses</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <h2>Route </h2>
      <ol>
        <li>{location.state[0]}</li>
        <li>{location.state[1]}</li>
        <li>{location.state[2]}</li>

      </ol>
      
    </main>
    <footer>
      <p>&copy; 2023 Citymapper</p>
    </footer>
    </div>
}
    