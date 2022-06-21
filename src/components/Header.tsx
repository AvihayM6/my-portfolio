import * as React from 'react';
import '../style/Header.css'

export interface IHeaderProps {
}

export function Header (props?: IHeaderProps) {
  return (
    <div className='header-body'>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  );
}