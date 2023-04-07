import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useEffect,useState } from 'react'
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import './listingpage.css';

export default function ListingPage(){
    const next = useNavigate();
    const location = useLocation();
    const [value,setValue] = useState("");
    const [data, setData] = useState(null);

    function submitfn(params: string) {
      console.log(params);
      fetchData(params);
    }

    async function fetchData(busId: string) {
        const response = await fetch("http://127.0.0.1:5000/busroute"+"?busId="+busId, {
          mode: 'cors'
        });
        const json = await response.json();
        setData(json);
        console.log(json);
    
        next('/details',{state:json});
    }

    return <div>
        {/* <button onClick={() => { next("/details") }}>lsitingpage</button>
        <div><div onClick={()=>submitfn(location.state.buses_list[0].bus_id)}>{location.state.buses_list[0].bus_id}</div>,{location.state.buses_list[0].Arr_Time},{location.state.buses_list[0].Dep_Time}</div>
        <div>{location.state.buses_list[1].bus_id},{location.state.buses_list[1].Arr_Time},{location.state.buses_list[1].Dep_Time}</div>
         */}
        {/* <div>
      {location.state.buses_list.map((bus: { bus_id: React.Key | null | undefined; Arr_Time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; Dep_Time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;},index: any) => (
        <div key={bus.bus_id}>
          <p onClick={()=>submitfn(location.state.buses_list[index].bus_id)}>{bus.bus_id},
          {bus.Arr_Time},
          {bus.Dep_Time}</p>
        </div>
      ))}
    </div> */}
    <header>
    <h1>Citymapper Buses</h1>
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
          <th>Bus Number</th>
          <th>Arr Time</th>
          <th>Dep Time</th>
        </tr>
      </thead>
      <tbody>
      {location.state.buses_list.map((bus: { bus_id: React.Key | null | undefined; Arr_Time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; Dep_Time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;},index: any) => (
        <tr key={bus.bus_id}>
          <td onClick={()=>submitfn(location.state.buses_list[index].bus_id)}>{bus.bus_id}</td>
          <td onClick={()=>submitfn(location.state.buses_list[index].Arr_Time)}>{bus.Arr_Time}</td>
          <td onClick={()=>submitfn(location.state.buses_list[index].Dep_Time)}>{bus.Dep_Time}</td>
        </tr>
      ))}
        
       
        
      </tbody>
    </table>
  </main>
  <footer>
    <p>&copy; 2023 Citymapper</p>
  </footer>

    </div>}


    