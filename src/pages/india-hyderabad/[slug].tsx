import React, { useState, useMemo } from 'react';
import Table from '@/components/Table/Table';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import fsPromises from 'fs/promises';
import path from 'path';

export default function App(props: any) {

  const currentTableData = props.data;

  return (
    <div>
      

            <title>All Schedule Timing TimeTable of Hyderabad City Bus</title><meta name = "keyword" content="find bus schedule,City bus timetable, Hyderabad City Bus,,bus schedule,"/>
      <meta name = "keyword" content="bus timings Hyderabad city,Hyderabad bus route,find bus schedule,Hyderabad City route map, bus timetable pdf,city bus routes,bus routes list Hyderabad,Hyderabad City Bus"/>
          <meta name="description" content="Find Hyderabad City Bus Routes Schedule Timings TimeTable and info.Get bus Route pdf"/>

    <h1 className="h1class"><a href="" title="Hyderabad Bus Routes " target="_self">Hyderabad City Bus Routes</a></h1>
    <Header/>
    
    <Table currentTableData = {currentTableData}/>


  <Footer/>

    </div>
  );
}
export async function getServerSideProps (context: any) {
  console.log(context.query.slug);
  console.log("what");
  const filePath = path.join(process.cwd(), 'src/json/india/hyderabad/'+context.query.slug+'.json');
  const jsonData = await fsPromises.readFile(filePath, { encoding: 'utf-8' });
  const data = JSON.parse(jsonData);
  const filename = context.query.slug;
return {
  props: {data,filename},
}  
}