import React, { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react'

import './details.css';



export default function BusIdRouteFromTo(){
  const location = useLocation();
  console.log(location.state.buses_list_from[0]);
  console.log(location.state.buses_list_to[0]);


// To display the details of the first bus going from Nagole to Raidurg:
  return (
    <div>
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
          <th>Bus Id</th>
          <th>Stop</th>
          <th>Arr Time</th>

        </tr>
      </thead>
      <tbody>
      {location.state.buses_list_from.map((bus: { stop_id: React.Key | null | undefined; 
      bus_id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
      Arr_Time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
    },index: any) => (
        <tr key={bus.stop_id}>
          <td>{location.state.buses_list_from[index]["bus_id"]}</td>
          <td>{location.state.buses_list_from[index]["stop_id"]}</td>
          <td>{location.state.buses_list_from[index]["Arr_Time"]}</td>

    </tr>
      ))}


      </tbody>
      
    </table> 
    <table>
      <thead>
        <tr>
          <th>Bus Id</th>
          <th>Stop</th>
          <th>Arr Time</th>

        </tr>
      </thead>
      <tbody>
      {location.state.buses_list_to.map((bus: { stop_id: React.Key | null | undefined; 
      bus_id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
      Arr_Time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
    },index: any) => (
        <tr key={bus.stop_id}>
          <td>{location.state.buses_list_to[index]["bus_id"]}</td>
          <td>{location.state.buses_list_to[index]["stop_id"]}</td>
          <td>{location.state.buses_list_to[index]["Arr_Time"]}</td>

    </tr>
      ))}


      </tbody>
      
    </table>
    </main>
    <footer>
      <p>&copy; 2023 Citymapper</p>
    </footer>
    </div>
  );
}
