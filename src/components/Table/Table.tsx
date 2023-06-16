import Pagination from '@/pagination';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react'
import Loader from '../loader';

export default function Table(props:any) {
    let PageSize = 30;
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return props.currentTableData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
 
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
          const currentUrl = window.location.href;
          console.log(currentUrl);
          const city = currentUrl.split('/')[4];
          const country = currentUrl.split('/')[3];
          const filename = currentUrl.split('/')[6];
          const agency = currentUrl.split('/')[5];
          console.log(country,city);

          router.push({
            pathname: `/`+country+`/`+city+`/detailbusjourney/hyderabad-city-bus-${encodeURIComponent(busId)}-that-goes-from-${encodeURIComponent(fromVal)}-to-${encodeURIComponent(toVal)}-${filename}-${country}-${city}-${agency}`,
          });
        } catch (error) {
          console.error(error);
        }
        finally{
          setLoading(false);
        }
      }
      useEffect(() => {
        console.log(props.currentTableData);
        setLoading(true)
      }, [router])
      
  return (
    <>
    {!loading ? <Loader /> : <></>}
    <main>
  <div className="flex-wrapper">
    <div className="container">
  <div className="row">
      <table className="center">
        <thead>
          <tr>
            {/* <th className="th-class">S No</th> */}
            <th className="th-class">Bus Id</th>
            <th className="th-class">From</th>
            <th className="th-class">To</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item:any )=> {
            return (
              <tr key={item.id}>
                {/* <td className = "td-class">{item.id}</td> */}
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
        totalCount={props.currentTableData.length}
        pageSize={PageSize}
        onPageChange={(page: React.SetStateAction<number>) => setCurrentPage(page)}
      />
       </div>
      </div>  
      </div>
</main>
    </>
  )
}
