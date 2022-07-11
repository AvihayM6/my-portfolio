import * as React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css'
import {About} from './About'


export const Header  = () => {
  return (
    <nav className='header-body'>
      <ul>
        <li><a href="">About</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
      </ul>
    </nav>
  );
}