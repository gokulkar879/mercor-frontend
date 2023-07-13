import React from 'react';
import Navbar from './Navbar';
import MobileApp from '../utilComponents/MobileApp';
import Share from '../utilComponents/Share';

function Dashboard() {
  return (
    <div className='dashboard'>
      <Navbar />
      <div className='dashboard__center'>
        <MobileApp />
        <Share />
      </div>
    </div>
  )
}

export default Dashboard