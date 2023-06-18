import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const  ContactUs = () =>{
  useEffect(() => {
    //const hostname = window.location.hostname;
    //console.log(hostname);
    const currentUrl = window.location.href;
    console.log(currentUrl);
    const hasWord = currentUrl.includes('contact');

    console.log(hasWord+"hasWord");
    document.getElementsByClassName('commonclass');
     for (let i = 0; i < document.getElementsByClassName('commonclass').length; i++) {
      console.log(document.getElementsByClassName('commonclass')[i].className = "commonclass");
    }

    if(currentUrl.includes('contact') == true){
      var val = (document.getElementById("contact") as HTMLInputElement);
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
  return (
    <div>  
            <title>All Schedule Timing TimeTable of hyderabad City Bus</title><meta name = "keyword" content="find bus schedule,City bus timetable, hyderabad City Bus,,bus schedule,"/>
      <meta name = "keyword" content="bus timings hyderabad city,hyderabad bus route,find bus schedule,hyderabad City route map, bus timetable pdf,city bus routes,bus routes list hyderabad,hyderabad City Bus"/>
          <meta name="description" content="Find hyderabad City Bus Routes Schedule Timings TimeTable and info.Get bus Route pdf"/>

    <h1 className="h1class"><a href="" title="hyderabad Bus Routes " target="_self">hyderabad City Bus Routes</a></h1>

        <div className="topnav" id="myTopnav">
        <Link id = "home" href="/india/hyderabad/home" className="commonclass">home</Link>
        <Link id = "bustimings" className="commonclass" href="/india/hyderabad/bustimings" >Search Bus</Link>
        <Link id = "allbuses" className="commonclass" href="/india/hyderabad/allbuses">All Buses</Link>
        <Link id = "contact" className="commonclass" href="/india/hyderabad/contact">Contact</Link>
        <Link id = "about" className="commonclass" href="/india/hyderabad/about">About</Link>
        <Link id = "metrotimings" className="commonclass" href="/india/hyderabad/metrotimings">Metro Timings</Link>

      <a href="javascript:void(0);" className="icon" onClick={myFunction}>
      <i className="fa fa-bars"></i>
      </a>
    </div> 
     <main>

        <div className="flex-wrapper">
        <div className="row">
  <h3 className="h3class">Contact Us</h3>

  <div className="col-sm-6">
    
       
<p>If you have any recommendations, please share them with us at rohith@cityroutemapper.com, and we will do our best to incorporate them into our page. Our goal here is to offer an error-free flow of information. This will make us more user-friendly, and the inhabitants of hyderabad will be profitted.</p>
</div>
</div>
  <footer>
    <p>&copy; 2023 Cityroutemapper</p>
  </footer>
  </div>
  </main>

  </div>
  );
};
  
export default ContactUs;

