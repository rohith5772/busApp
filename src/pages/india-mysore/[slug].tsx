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
      

            <title>All Schedule Timing TimeTable of Mysore City Bus</title><meta name = "keyword" content="find bus schedule,City bus timetable, Mysore City Bus,,bus schedule,"/>
      <meta name = "keyword" content="bus timings Mysore city,Mysore bus route,find bus schedule,Mysore City route map, bus timetable pdf,city bus routes,bus routes list Mysore,Mysore City Bus"/>
          <meta name="description" content="Find Mysore City Bus Routes Schedule Timings TimeTable and info.Get bus Route pdf"/>

    <h1 className="h1class"><a href="" title="Mysore Bus Routes " target="_self">Mysore City Bus Routes</a></h1>
    <Header/>
    
    <Table currentTableData = {currentTableData}/>


  <Footer/>

    </div>
  );
}
export async function getServerSideProps (context: any) {
  console.log(context.query.slug);
  console.log("what");
  const filePath = path.join(process.cwd(), 'src/json/india/mysore/'+context.query.slug+'.json');
  const jsonData = await fsPromises.readFile(filePath, { encoding: 'utf-8' });
  const data = JSON.parse(jsonData);
  const filename = context.query.slug;
return {
  props: {data,filename},
}  
}