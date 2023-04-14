import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react'

import './details.css';



export default function DetailingPage(){
    const next = useNavigate();
    const location = useLocation();
    const [data, setData] = useState(null);

    function submitfn(params: string) {
      console.log(params);
      fetchData(params);
    }

    async function fetchData(busId: string) {
        const response = await fetch("https://rohith5772.pythonanywhere.com/busroutewithtimings"+"?busId="+busId, {
          mode: 'cors'
        });
        const json = await response.json();
        setData(json);
        console.log(json);
    
        next('/DetailingTimingsPage',{state:json});
    }


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
    <table>
      <thead>
        <tr>
          <th>Stop</th>
          <th>Arr Time</th>
          <th>Freq</th>
        </tr>
      </thead>
      <tbody>
      {location.state.buses_list.map((bus: { bus_id: React.Key | null | undefined; 
      stop_id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
      Freq: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
      Arr_Time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;

    },index: any) => (
        <tr key={bus.bus_id}>
          <td onClick={()=>submitfn(location.state.buses_list[index].stop_id)}>{bus.stop_id}</td>
          <td onClick={()=>submitfn(location.state.buses_list[index].Arr_Time)}>{bus.Arr_Time}</td>
          <td onClick={()=>submitfn(location.state.buses_list[index].Freq)}>{bus.Freq}</td>
        </tr>
      ))}
      </tbody>
    </table> 
    </main>
    <footer>
      <p>&copy; 2023 Citymapper</p>
    </footer>
    </div>
}
    