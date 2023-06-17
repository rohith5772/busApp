import React, { useState, useMemo } from 'react';
import Pagination from '../pagination';
import data from '../json/hyderabad/hyderabad_local_bus.json';
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import Link from 'next/link';
import Loader from '../components/loader';
import Table from '@/components/Table/Table';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';

//let PageSize = 10;

export default function App() {
  //const [currentPage, setCurrentPage] = useState(1);
  //const router = useRouter();
  //const [loading, setLoading] = useState(false);

  const currentTableData = data;
  // useEffect(() => {
      
  //   const currentUrl = window.location.href;
  //   console.log(currentUrl);
  //   const hasWord = currentUrl.includes('allbuses');

  //   console.log(hasWord+"hasWord");
  //   document.getElementsByClassName('commonclass');
  //    for (let i = 0; i < document.getElementsByClassName('commonclass').length; i++) {
  //     console.log(document.getElementsByClassName('commonclass')[i].className = "commonclass");
  //   }

  //   if(currentUrl.includes('allbuses') == true){
  //     var val = (document.getElementById("allbuses") as HTMLInputElement);
  //     val.className+=" active";
  //   }

  // }, []);
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
    {/* <div className="topnav" id="myTopnav">
    <Link id = "home" href="/india/hyderabad/home" className="commonclass">home</Link>
        <Link id = "bustimings" className="commonclass" href="/india/hyderabad/bustimings" >Search Bus</Link>
        <Link id = "allbuses" className="commonclass" href="/india/hyderabad/allbuses">All Buses</Link>
        <Link id = "contact" className="commonclass" href="/india/hyderabad/contact">Contact</Link>
        <Link id = "about" className="commonclass" href="/india/hyderabad/about">About</Link>
        <Link id = "metrotimings" className="commonclass" href="/india/hyderabad/metrotimings">Metro Timings</Link>

  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div> */}
    <Table currentTableData = {currentTableData}/>

{/*<main>
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
</main>*/}

  <Footer/>

    </div>
  );
}
