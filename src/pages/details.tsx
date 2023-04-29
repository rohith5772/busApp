import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useRouter } from 'next/router';

interface BusData {
  buses_list: {
    Stop_Timings: any;
    Arr_Time: string;
    Dep_Time: string;
    Freq: string;
    From: string;
    Station_Order: number;
    To: string;
    bus_id: string;
    stop_id: string;
  }[];
}
interface StopTimings {
  [stopId: string]: string[];
}
type StopTiming = {
  name: string;
  time: string;
}
const  DetailingPage = (props: any) =>{
    const router = useRouter();
    const busId= router.query.busId;
    const fromVal = router.query.From;
    const toVal = router.query.To;
    const [data, setData] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [inputValue, setInputValue] = useState(Number);
    const [busData, setBusData] = useState(null);
    const [stopTimings, setStopTimings] = useState<Array<string>>([]); // specify the type of the state variable as an array of strings
    //const [stateVal, setStateVal] = useState<BusData>(props.busesList);//if you want to do server side rendering just uncooment this line and comment below line and comment useeffect method and uncomment getserversideprops..thats it
    const [stateVal, setStateVal] = useState<BusData>({ buses_list: [] });
    const [timeLength,setTotalTimingsLength] = useState(Number);
    //const arrParticularStopTiming: Array<string> = [];
    const [arrParticularStopTiming, setArrParticularStopTiming] = useState<string[]>([]);

    useEffect(() => {
      async function fetchResult() {
        try { 
          const params = new URLSearchParams(location.search);

      const busId = params.get('busId');
      const fromVal = params.get('From');
      const toVal = params.get('To');
          const response = await fetch("https://rohith5772.pythonanywhere.com/busroutewithtimings"+"?busId="+busId+"&fromVal="+fromVal+"&toVal="+toVal);
            const data: BusData = await response.json();
          setStateVal(data);
          console.log(fromVal);
          console.log(toVal);
        } catch (error) {
          console.error(error);
        } 
      }
      fetchResult();
      
         }, []);
    const arr: any[] = [];    
    function openPopup(event:any) {
      setIsPopupOpen(true);
      setInputValue(event.currentTarget.value);
      console.log(event.currentTarget.value);
      console.log(stateVal);
      const stopTimingsArray = stateVal.buses_list.map((bus) => bus.Stop_Timings);
      setStopTimings(stopTimingsArray);
      setTotalTimingsLength(stopTimingsArray[event.currentTarget.value].length);
      console.log(stopTimingsArray[event.currentTarget.value]);
      console.log(timeLength);
      setMyArray([]);

      for(let i = 0;i<stopTimingsArray[event.currentTarget.value].length;i++)
      {
          console.log(stopTimingsArray[event.currentTarget.value][i]);
          arr.push(stopTimingsArray[event.currentTarget.value][i]);
          arrParticularStopTiming.push(stopTimingsArray[event.currentTarget.value][i]);
          setArrParticularStopTiming([...arrParticularStopTiming, arr[i]])
          console.log(arr[i]+"arrr");
          setMyArray(prevArray => [...prevArray, arr[i]]);

      }
      console.log(arr[0],arrParticularStopTiming[0]+"app");
     
    }
    
    /*if (stateVal.buses_list) {
      setBusData(stateVal.buses_list[0].Stop_Timings);
      for(let i = 0;i<location.state.buses_list[0].Stop_Timings.length;i++)
      {
        arr.push(location.state.buses_list[0].Stop_Timings[i]);
      }
    }*/
    const closePopup = () => {
      setIsPopupOpen(false);
      setMyArray([]);
      if (arr.length === 0) {
        console.log('The array is empty');
        return null; 
      }
    
    };
    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      //setInputValue(event.target.value);
      console.log(busData+"handleInputChange");
    };
  
    function submitfn() {
      console.log();
      fetchData();
    }
    function myFunction() {
      var x = (document.getElementById("myTopnav") as HTMLInputElement);
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
      }
    async function fetchData() {
      const params = new URLSearchParams(location.search);

      const busIdVal = params.get('busId');
      const fromVal = params.get('From');
      const toVal = params.get('To');
      
      console.log(busIdVal,fromVal,toVal,"aaa");
      /*const response = await fetch("http://127.0.0.1:5000/busroutewithtimings"+"?busId="+busIdVal+"&fromVal="+fromVal+"&toVal="+toVal, {
          mode: 'cors'
        });
        const json = await response.json();
        setData(json);
        console.log(json);*/

        router.push({
          pathname: '/detailingtimingpage',
          query: {busId:busIdVal,From:fromVal ,To:toVal },
        });
    }
    const [myArray, setMyArray] = useState(['']);

   
    const PopupContent = () => {console.log("hi",arr[0]);
      return (
        <div>
        
        <p>{stateVal.buses_list[inputValue].bus_id} stops at {stateVal.buses_list[inputValue].stop_id} at </p>

<td className = "td-class">{myArray.map((timings : any , i : number)=>{
            if(myArray.length - 1 === i)
            return (<span key={i}>{timings} </span>)
            else{
              return (<span key={i}>{timings} , </span>)
            }
          })}</td>
          <button onClick={closePopup}>Close</button>
        </div>
      );
    };

    return <div>
      <h1 className="h1class"><a href="http://www.hyderabadcitybus.com/" title="Hyderabad Bus Routes " target="_self">Hyderabad City Bus Routes</a></h1>

      
  <div className="topnav" id="myTopnav">
  <a href="/" className="active">Home</a>
  <a href="bustimings">Search Bus</a>
  <a href="contact">Contact</a>
  <a href="about">About</a>
  <a href="" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>
    <main>
    <h3 className="h3class allignmentClass">Hyderabad City Bus Stops of Route No: {stateVal.buses_list.length > 0 && stateVal.buses_list[0].bus_id}</h3>

    <div className="flex-wrapper">

    <table>
      <thead>
        <tr>
          <th className = "th-class">Stop</th>
          <th className = "th-class">First Bus</th>
          <th className = "th-class">Click here for all trips</th>

        </tr>
      </thead>
      <tbody>
      {stateVal.buses_list.map((bus: { bus_id: React.Key | null | undefined; 
      stop_id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
      Freq: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
      Arr_Time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;

    },index: any) => (
        <tr key={bus.bus_id}>
          <td className = "td-class">{bus.stop_id}</td>
          <td className = "td-class">{bus.Arr_Time}</td>

           <button className = "buttonclass" onClick={openPopup} value={index}><td className = "td-classbutton"><h6 className="highlighttext">click here for full timings at {bus.stop_id}</h6></td></button>
      <Popup
        open={isPopupOpen}
        closeOnDocumentClick={false}
        onClose={closePopup}
      >
        <PopupContent />
      </Popup>
        </tr>
      ))}
      </tbody>
    </table> 
    <h6 className="highlighttext highlighttextaddclassforpadding"  onClick={()=>submitfn()}> click here for full timings at each stop</h6>
    <footer>
      <p>&copy; 2023 Citymapper</p>
    </footer>
    </div>
    </main>
    
    <div>

      
    </div>
  

        </div>
}
/*export async function getServerSideProps (context: any) {
  
  const response = await fetch("http://127.0.0.1:5000/busroutewithtimings?busId="+context.query.busId+"&fromVal="+context.query.From+"&toVal="+context.query.To);
  const busesList: BusData = await response.json();
return {
props: {busesList}, // will be passed to the page component as props
}
}*/
export default DetailingPage;
