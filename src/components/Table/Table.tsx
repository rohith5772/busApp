import Pagination from '@/pagination';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react'
import Loader from '../loader';
import Link from 'next/link';
import Select from "react-select";

export default function Table(props:any) {
    let PageSize = 30;
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [city, setCity] = useState(String);
    const [filenameorg, setFilename] = useState(String);

    const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return props.currentTableData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
   const [selectedOptionsBus, setSelectedOptionsBus] = useState<undefined | { value: string; label: string;S_No:string }>(undefined);
  function handleSelectBus(data:any) {
    setSelectedOptionsBus(data);
    console.log((data['value']));
    console.log((" hi "));
    console.log((data['S_No']));
  }
  const optionList = props.currentTableData.map((item: { bus_id: any,S_No:any; }) => ({
    value: item.bus_id,
    label: item.bus_id,
    S_No : item.S_No
  }));  
  function submitBusId(event: any)
  {
    event.preventDefault();
    if (selectedOptionsBus?.label) {
      fetchData(selectedOptionsBus?.label,selectedOptionsBus?.S_No);   
     } else {
      alert("  endval and startval Cannnot be blank");
      return;
    }
  }
    function submitfn(busId: string,s_no: string) {
        console.log(busId);
        fetchData(busId,s_no);
      }
      async function fetchData(busId: string,s_no: string) {
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
          const cityy = currentUrl.split('/')[3];
          const filename = currentUrl.split('/')[4];
          busId = busId.replaceAll('-','_').toLowerCase(); 
          s_no = (parseInt(s_no)%2).toString();
          router.push({
            pathname: `/`+cityy+`/route/${encodeURIComponent(busId)}-${filename}-${s_no}`,
            //pathname: `/`+country+`/`+city+`/detailbusjourney/`+city+`-city-bus-${encodeURIComponent(busId)}-that-goes-from-${encodeURIComponent(fromVal)}-to-${encodeURIComponent(toVal)}-${filename}-${country}-${city}-${agency}`,
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
        const currentUrl = window.location.href;
        console.log(currentUrl);
        const cityval = currentUrl.split('/')[3];
        const filenameval = currentUrl.split('/')[4];
        console.log(filenameval,cityval);
        setCity(cityval);
        setFilename(filenameval);
        setLoading(true)
      }, [router])
      
  return (
    <>
    {!loading ? <Loader /> : <></>}
    <main>
  <div className="flex-wrapper">
    <div className="container">
    <div style={{ display: 'flex', alignItems: 'center' }}>

    <Select className="optclass"
id="start"
  options={optionList}
  value={selectedOptionsBus}
  placeholder="Search For a line"
  onChange={handleSelectBus}
  isSearchable={true}
/>
<button className='getroute' onClick={submitBusId} type="submit">Search</button>
</div>
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
              <tr key={item.bus_id}>
                {/* <td className = "td-class">{item.id}</td> */}
                <td className = "td-class" onClick={()=>submitfn(item.bus_id,item.S_No)}><h6 className="highlighttext">{item.bus_id}</h6></td>
                {/* <td className="td-class"><Link href={`/${encodeURIComponent(city)}/detailbusjourney/${encodeURIComponent(item.bus_id).replaceAll("-","_").toLowerCase()}-${encodeURIComponent(item.From)}-${encodeURIComponent(item.To)}-${filenameorg}/`}><h6 className="highlighttext">{item.bus_id}</h6></Link></td>                 */}
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
