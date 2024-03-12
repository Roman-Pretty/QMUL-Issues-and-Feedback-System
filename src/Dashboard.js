import './css/App.css';
import React, {useState} from 'react';

function DashboardCard() {
    return (
        <div className='dashboard-card'>
            <div className='dashboard-card-header'>
                <h1 className='text-title'>Dashboard</h1>
                <p className='text-card-title'>Welcome User</p>
            </div>
            
        </div>
    );
    
}

const Dashboard = () => {
    return (
    <div id='dashboard'>
        <DashboardCard />
    </div>
  );
};
export default Dashboard;
