import React, {useContext} from 'react';
import { monContexte } from '../Context/LangueContext';
import { langueContaint } from './DataLangue';
import './Icons.css'


export default function Icons() {

  const {modifyLanguage} = useContext(monContexte);

  return (
    <div className='icons'>
      <ul>
        <li ><img onClick={() => (modifyLanguage("FR"))} src={langueContaint["FR"].image} alt=""/></li>
        <li ><img onClick={() => (modifyLanguage("EN"))} src={langueContaint["EN"].image} alt=""/></li>
        <li ><img onClick={() => (modifyLanguage("ES"))} src={langueContaint["ES"].image} alt=""/></li>
    </ul>
    </div>
  )
};