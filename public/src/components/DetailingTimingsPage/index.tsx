import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './timingsDetail.css';



export default function DetailingTimings(){
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
    <table>
      <thead>
        <tr>
          <th>Stop</th>
          <th>Arr Time</th>
          <th>Freq</th>
          <th>Timings</th>
        </tr>
      </thead>
      <tbody>
      {location.state.buses_list.map((bus: { bus_id: React.Key | null | undefined; 
      stop_id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
      Freq: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
      Arr_Time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
      Stop_Timings: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
    },index: any) => (
        <tr key={bus.bus_id}>
          <td onClick={(location.state.buses_list[index].stop_id)}>{bus.stop_id}</td>
          <td onClick={(location.state.buses_list[index].Arr_Time)}>{bus.Arr_Time}</td>
          <td onClick={(location.state.buses_list[index].Freq)}>{bus.Freq}</td>
          {/* <td onClick={(location.state.buses_list[index].Stop_Timings)}>{bus.Stop_Timings}{location.state.buses_list[index].Stop_Timings[0]},{location.state.buses_list[index].Stop_Timings[1]}</td> */}
          <td>{location.state.buses_list[index].Stop_Timings.map((timings : any , i : number)=>{
            if(location.state.buses_list[index].Stop_Timings.length - 1 === i)
            return (<span>{timings} </span>)
            else{
              return (<span>{timings} , </span>)
            }
          })}</td>
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
