import React, { useState, useMemo } from 'react';
import Pagination from '../pagination';
import data from '../examples/data/hydbuses.json';
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import Link from 'next/link';

let PageSize = 10;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  useEffect(() => {
      
    const currentUrl = window.location.href;
    console.log(currentUrl);
    const hasWord = currentUrl.includes('bustimings');

    console.log(hasWord+"hasWord");
    document.getElementsByClassName('commonclass');
     for (let i = 0; i < document.getElementsByClassName('commonclass').length; i++) {
      console.log(document.getElementsByClassName('commonclass')[i].className = "commonclass");
    }

    if(currentUrl.includes('allbuses') == true){
      var val = (document.getElementById("allbuses") as HTMLInputElement);
      val.className+=" active";
    }

  }, []);
  function myFunction() {
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
    }
    async function fetchData(busId: string, fromVal: string, toVal: string) {
      try {
       /* const response = await fetch(
          `http://127.0.0.1:5000/busroutewithtimings?busId=${busId}&fromVal=${fromVal}&toVal=${toVal}`,
          {
            mode: 'cors',
          }
        );
        const json = await response.json();*/
        /*router.push({
          pathname: '/detailbusjourney',
          query: {busId:busId,From:fromVal ,To:toVal },
        });*/
        router.push({
          pathname: `/detailbusjourney/hyderabad-city-bus-${encodeURIComponent(busId)}-that-goes-from-${encodeURIComponent(fromVal)}-to-${encodeURIComponent(toVal)}`,
        });
      } catch (error) {
        console.error(error);
      }
    }
  
  return (
    <div>
            <title>All Schedule Timing TimeTable of Hyderabad City Bus</title><meta name = "keyword" content="find bus schedule,City bus timetable, Hyderabad City Bus,,bus schedule,"/>
      <meta name = "keyword" content="bus timings hyderabad city,hyderabad bus route,find bus schedule,Hyderabad City route map, bus timetable pdf,city bus routes,bus routes list hyderabad,Hyderabad City Bus"/>
          <meta name="description" content="Find Hyderabad City Bus Routes Schedule Timings TimeTable and info.Get bus Route pdf"/>

    <h1 className="h1class"><a href="" title="Hyderabad Bus Routes " target="_self">Hyderabad City Bus Routes</a></h1>
    <div className="topnav" id="myTopnav">
   <Link id = "home" href="/" className="commonclass">Home</Link>
  <Link id = "bustimings" className="commonclass" href="/bustimings">Search Bus</Link>
  <Link id = "allbuses" className="commonclass" href="/allbuses">All Buses</Link>
  <Link id = "contact" className="commonclass" href="/contact">Contact</Link>
  <Link id = "about" className="commonclass" href="/about">About</Link>
  <Link id = "metrotimings" className="commonclass" href="/metrotimings">Metro Timings</Link>

  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>
<main>
  <div className="flex-wrapper">
  <div className="container">
  <div className="row">
      <table className="center">
        <thead>
          <tr>
            <th className="th-class">S No</th>
            <th className="th-class">Bus Id</th>
            <th className="th-class">From</th>
            <th className="th-class">To</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map(item => {
            return (
              <tr key={item.id}>
                <td className = "td-class">{item.id}</td>
                <td className = "td-class" onClick={()=>submitfn(item.bus_id,item.From,item.To)}><h6 className="highlighttext">{item.bus_id}</h6></td>
                <td className = "td-class">{item.From}</td>
                <td className = "td-class">{item.To}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page: React.SetStateAction<number>) => setCurrentPage(page)}
      />
      </div>
      </div>
  <footer>
    <p>&copy; 2023 Cityroutemapper</p>
  </footer>
</div>
</main>
    </div>
  );
}
