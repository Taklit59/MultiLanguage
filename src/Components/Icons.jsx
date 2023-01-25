import React from 'react';
import { useContext } from 'react';
import { langueContaint } from './DataLangue';
import './Icons.css'

function Icons() {
  return (
    <div className='icons'>
      <ul>
        <li><img src={langueContaint[0].image} alt=""/></li>
        <li><img src={langueContaint[1].image} alt=""/></li>
        <li><img src={langueContaint[2].image} alt=""/></li>
    </ul>
    </div>
  )
}

export default Icons
