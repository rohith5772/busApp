import React, { useState, useMemo } from 'react';
import Pagination from '../../../pagination';
import data from '../../../json/india/hyderabad/test.json';
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import Link from 'next/link';
import Loader from '../../../components/loader';
import Table from '@/components/Table/Table';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import fsPromises from 'fs/promises';

//let PageSize = 10;


export default function App(props: any) {
  const [currentTableData, setCurrentTableData] = useState([]);
  //const router = useRouter();
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCurrentTableData(props.data);
console.log(props.data);
   

  }, []);
  /*function myFunction() {
    var x = (document.getElementById("myTopnav") as HTMLInputElement);
   
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    }
    function submitfn(busId: string,From:string,To:string) {
      console.log(busId,From,To);
      fetchData(busId,From,To);
    }*/
    /*async function fetchData(busId: string, fromVal: string, toVal: string) {
      try {
      
        router.push({
          pathname: `/india/hyderabad/detailbusjourney/hyderabad-city-bus-${encodeURIComponent(busId)}-that-goes-from-${encodeURIComponent(fromVal)}-to-${encodeURIComponent(toVal)}`,
        });
      } catch (error) {
        console.error(error);
      }
      finally{
        setLoading(false)
      }
    }
    useEffect(() => {
      setLoading(true)
    }, [router])*/
  return (
    <div>
      

            <title>All Schedule Timing TimeTable of hyderabad City Bus</title><meta name = "keyword" content="find bus schedule,City bus timetable, hyderabad City Bus,,bus schedule,"/>
      <meta name = "keyword" content="bus timings hyderabad city,hyderabad bus route,find bus schedule,hyderabad City route map, bus timetable pdf,city bus routes,bus routes list hyderabad,hyderabad City Bus"/>
          <meta name="description" content="Find hyderabad City Bus Routes Schedule Timings TimeTable and info.Get bus Route pdf"/>

    <h1 className="h1class"><a href="" title="hyderabad Bus Routes " target="_self">hyderabad City Bus Routes</a></h1>
    <Header/>
    {currentTableData.map((item:any )=> {
            return (
              <tr key={item.bus_id}>
                {/* <td className = "td-class">{item.id}</td> */}
                <td className = "td-class">{item.bus_id}</td>
                <td className = "td-class">{item.From}</td>
                <td className = "td-class">{item.To}</td>
                <td className = "td-class">{item.stop_id[1]}</td>

              </tr>
            );
          })}
     <Footer/>

    </div>
  );
}
export async function getServerSideProps (context: any) {
  
  const filePath =  'src/json/india/hyderabad/test.json';
  const jsonData = await fsPromises.readFile(filePath, { encoding: 'utf-8' });
  const data = JSON.parse(jsonData);
  //console.log(data);

  for(var i =0;i<data.length;i++)
  {
    //console.log(data[i]);
    if(data[i].bus_id == 'V-201' && data[i].From == 'CityBusStandPlatform23' && data[i].To == 'ChamundiHill')
    {
      console.log("hip");

      console.log(data[i]);

    }
  }

return {
    props: {data},
  }
}