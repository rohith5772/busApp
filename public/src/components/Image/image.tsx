import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useEffect,useState } from 'react'
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import './image.css';

export default function Image(){
  const next = useNavigate();
  const location = useLocation();
  return <div>
      <img src= {location.state[0].url}></img>
      <img src= {location.state[1].url}></img>
      <img src= {location.state[2].url}></img>
      <img src= {location.state[3].url}></img>
      <img src= {location.state[4].url}></img>
      <img src= {location.state[5].url}></img>
      <img src= {location.state[6].url}></img>
      <img src= {location.state[7].url}></img>
      <img src= {location.state[8].url}></img>
      <img src= {location.state[9].url}></img>

      </div>
}


