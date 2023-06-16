import React, { useEffect } from 'react'
import Link from 'next/link';

export default function header() {
    useEffect(() => {
      
        const currentUrl = window.location.href;
        console.log(currentUrl);
        const hasWord = currentUrl.includes('allbuses');
    
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
  return (
    <div>
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
    </div>
  )
}
