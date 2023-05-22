import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ReactGA from 'react-ga';

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
    const [stateVal, setStateVal] = useState<BusData>(props.stopList);//if you want to do server side rendering just uncooment this line and comment below line and comment useeffect method and uncomment getserversideprops..thats it
    //const [stateVal, setStateVal] = useState<BusData>({ buses_list: [] });
    const [timeLength,setTotalTimingsLength] = useState(Number);
    //const arrParticularStopTiming: Array<string> = [];
    const [arrParticularStopTiming, setArrParticularStopTiming] = useState<string[]>([]);
    const metaDescription = "Hyderabad City Bus Routes TimeTable from"+props.from+"to"+ props.to;
    const titleVal = "Hyderabad City Bus Routes TimeTable of route " +props.busId+ " from " +props.from+ " to " +props.to;

console.log(props.stopList);
    useEffect(() => {
      /*async function fetchResult() {
        try { 
          const params = new URLSearchParams(location.search);
          console.log(window.location.href);
      const busId = decodeURIComponent(window.location.href.split('-')[3]);
      const fromVal = decodeURIComponent(window.location.href.split('-')[7]);
      const toVal = decodeURIComponent(window.location.href.split('-')[9]);
      console.log(busId,fromVal,toVal);

          const response = await fetch("https://buwudfhowtxh2cgkwtrqucdnqy0ibsmy.lambda-url.ap-south-1.on.aws"+"?busId="+busId+"&fromVal="+fromVal+"&toVal="+toVal);
          //const response = await fetch("http://127.0.0.1:5000/busroutewithtimings"+"?busId="+busId+"&fromVal="+fromVal+"&toVal="+toVal);
          //const response = await fetch("https://buwudfhowtxh2cgkwtrqucdnqy0ibsmy.lambda-url.ap-south-1.on.aws?busId="+busId+"&fromVal="+fromVal+"&toVal="+toVal);

          const data: BusData = await response.json();
          setStateVal(data);
          console.log(fromVal);
          console.log(toVal);
        } catch (error) {
          console.error(error);
        } 
      }
      fetchResult();*/
      ReactGA.pageview(window.location.href);

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

      /*const busIdVal = params.get('busId');
      const fromVal = params.get('From');
      const toVal = params.get('To');
      */
      console.log(window.location.href);
      const busId = decodeURIComponent(window.location.href.split('-')[3]);
      const fromVal = decodeURIComponent(window.location.href.split('-')[7]);
      const toVal = decodeURIComponent(window.location.href.split('-')[9]);
      console.log(busId,fromVal,toVal);
      console.log(busId,fromVal,toVal,"aaa");
      /*const response = await fetch("http://127.0.0.1:5000/busroutewithtimings"+"?busId="+busIdVal+"&fromVal="+fromVal+"&toVal="+toVal, {
          mode: 'cors'
        });
        const json = await response.json();
        setData(json);
        console.log(json);*/

        /*router.push({
          pathname: '/detailingtimingpage',
          query: {busId:busIdVal,From:fromVal ,To:toVal },
        });*/
        router.push({
          pathname: `/detailingtimingpage/hyderabad-city-bus-${encodeURIComponent(busId)}-that-goes-from-${encodeURIComponent(fromVal)}-to-${encodeURIComponent(toVal)}`,
        });
    }
    const [myArray, setMyArray] = useState(['']);
    const [bus_Id, setBus_id] = useState(props.bus_Id);
    const [from, setFrom] = useState(props.from);
    const [to, setTo] = useState(props.to);

   
    const PopupContent = () => {console.log("hi",arr[0]);
      return (
        <div className="popupclose">
        
        <p>{stateVal.buses_list[inputValue].bus_id} stops at {stateVal.buses_list[inputValue].stop_id} at </p>

<td className = "td-class">{myArray.map((timings : any , i : number)=>{
            if(myArray.length - 1 === i)
            return (<span key={i}>{timings} </span>)
            else{
              return (<span key={i}>{timings} , </span>)
            }
          })}</td>
          <td className = "popupbuttonclose"><button onClick={closePopup}>Close</button></td>
        </div>
      );
    };

    return <div>
      <title>{titleVal}</title><meta name = "keyword" content="find bus schedule,City bus timetable, Hyderabad City Bus,,bus schedule,"/>
          <meta name="description" content={metaDescription} />
    <meta name="keyword" content="Hyderabad City Bus Routes, Hyderabad bus timings" />

      <h1 className="h1class"><a href="" title="Hyderabad Bus Routes " target="_self">Hyderabad City Bus Routes</a></h1>

      
  <div className="topnav" id="myTopnav">
  <Link href="/" className="active">Home</Link>
  <Link href="/bustimings">Search Bus</Link>
  <Link href="/allbuses">All Buses</Link>
  <Link href="/contact">Contact</Link>
  <Link href="/about">About</Link>
  <Link href="/metrotimings">Metro Timings</Link>

  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>
    <main>
    <h3 className="h3class allignmentClass">Hyderabad City Bus Stops of Route No: {stateVal.buses_list.length > 0 && stateVal.buses_list[0].bus_id}</h3>

    <div className="flex-wrapper">

    <table>
      <thead>
        <tr>
        <th className = "th-class">S.No</th>
          <th className = "th-class">Stop</th>
          {/*<th className = "th-class">First Bus</th>
          <th className = "th-class">Click here for all trips</th>*/}

        </tr>
      </thead>
      <tbody>
      {stateVal.buses_list.map((bus: { bus_id: React.Key | null | undefined; 
      stop_id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
      Freq: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
      Arr_Time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;

    },index: any) => (
        <tr key={bus.bus_id}>
          <td className = "td-class">{index+1}</td>
          <td className = "td-class">{bus.stop_id}</td>
         {/*<td className = "td-class">{bus.Arr_Time}</td>
            <button className = "buttonclass" onClick={openPopup} value={index}><td className = "td-classbutton"><h6 className="highlighttext">click here for full timings at {bus.stop_id}</h6></td></button>*/} 
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
  {/*<h6 className="highlighttext highlighttextaddclassforpadding"  onClick={()=>submitfn()}> click here for full timings at each stop</h6>*/}
    <footer>
      <p>&copy; 2023 Cityroutemapper</p>
    </footer>
    </div>
    </main>
    
    <div>

      
    </div>
  

        </div>
}
export async function getServerSideProps (context: any) {
  
  var val = context.query.slug;
  var busId = val.split('-')[3];
  var from = val.split('-')[7];
  console.log(busId,from); 
  var to = val.split('-')[9];
  console.log(to);
  //const response = await fetch("https://rohith5772.pythonanywhere.com/busroutewithtimings?busId="+busId+"&fromVal="+from+"&toVal="+to);
  const response = await fetch("https://buwudfhowtxh2cgkwtrqucdnqy0ibsmy.lambda-url.ap-south-1.on.aws/?busId="+busId+"&fromVal="+from+"&toVal="+to);

  const stopList: BusData = await response.json();
return {
props: {stopList,busId,from,to}, // will be passed to the page component as props
}}
export default DetailingPage;
