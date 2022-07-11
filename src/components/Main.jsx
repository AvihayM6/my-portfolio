import * as React from 'react';
import { About } from './About';
import { HeaderOfMain } from './HeaderOfMain';

export const Main = () =>{
  return (
    <div className='header-body' style={{marginTop:'1100px'}}>
      <HeaderOfMain />
      <About />
      There will be the contant
    </div>
  );
}