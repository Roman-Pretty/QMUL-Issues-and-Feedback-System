import '../css/App.css';
import React, { useState } from 'react';

function DashboardCard() {
    return (
        <div className='dashboard-card'>
            <div className='dashboard-card-header'>
                <h1 className='text-title'>Dashboard</h1>
                <p className='text-card-title'>Welcome User</p>
            </div>
            <div className='dashboard-card-accent'></div>
        </div>
    );
}

function SmallCard({ type, count = 0 }) {

    let icon = null;
    switch (type) {
        case 'Issues':
            icon = <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M45.3831 31.9064L31.3724 7.95524C29.9658 5.5168 27.3442 4.00332 24.5089 4.00001C21.6734 3.99669 19.0508 5.50391 17.6267 7.95534L3.61084 31.9152C2.15749 34.359 2.12462 37.4211 3.53235 39.9184C4.94124 42.4178 7.57931 43.9732 10.4488 43.9966L38.5245 43.9967C41.4238 43.9685 44.0569 42.4178 45.4656 39.9207C46.8726 37.4264 46.8411 34.3711 45.3831 31.9064ZM7.05616 33.9474L21.0824 9.96982C21.7927 8.74708 23.0955 7.99835 24.5042 8C25.9128 8.00165 27.2151 8.75347 27.9137 9.96445L41.9354 33.9345C42.6704 35.177 42.6861 36.7066 41.9817 37.9554C41.2762 39.2059 39.9574 39.9826 38.505 39.9968L10.4651 39.9966C9.04385 39.985 7.72244 39.2059 7.01687 37.9542C6.31206 36.7039 6.32852 35.1709 7.05616 33.9474ZM24.5007 35.9967C25.6056 35.9967 26.5013 35.1013 26.5013 33.9967C26.5013 32.8921 25.6056 31.9967 24.5007 31.9967C23.3957 31.9967 22.5 32.8921 22.5 33.9967C22.5 35.1013 23.3957 35.9967 24.5007 35.9967ZM26.5072 15.9967H22.5059V29.9967H26.5072V15.9967Z" fill="#0D3273" />
            </svg>;
            break;
        case 'EC':
            icon = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="48" viewBox="0 0 40 48" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5606 0H27.2825L39.4697 12.1872V43.6364C39.4697 46.0463 37.516 48 35.1061 48H4.5606C2.15063 48 0.19696 46.0463 0.19696 43.6364V4.36364C0.19696 1.95367 2.15063 0 4.5606 0ZM22.0151 4.36364H4.5606V43.6364H35.1061V17.4545H26.3788C23.9688 17.4545 22.0151 15.5009 22.0151 13.0909V4.36364ZM26.3788 5.26737V13.0909H34.2023L26.3788 5.26737ZM11.1061 34.9091V30.5455H24.197V34.9091H11.1061ZM11.1061 21.8182V26.1818H28.5606V21.8182H11.1061Z" fill="#0D3273" />
            </svg>;
            break;
        case 'Urgent EC':
            icon = <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0809 5.41421L10.2524 2.58578L3.25244 9.58578L6.08087 12.4142L13.0809 5.41421ZM36.2524 5.41421L39.0809 2.58578L46.0809 9.58578L43.2524 12.4142L36.2524 5.41421ZM24.6667 44C13.621 44 4.66666 35.0457 4.66666 24C4.66666 12.9543 13.621 4 24.6667 4C35.7124 4 44.6667 12.9543 44.6667 24C44.6667 35.0457 35.7124 44 24.6667 44ZM24.6667 40C33.5032 40 40.6667 32.8366 40.6667 24C40.6667 15.1634 33.5032 8 24.6667 8C15.8301 8 8.66666 15.1634 8.66666 24C8.66666 32.8366 15.8301 40 24.6667 40ZM34.6667 22H26.6667V12H22.6667V26H34.6667V22Z" fill="#0D3273" />
            </svg>
            break;
        case 'Archived':
            icon = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 12H16V10H32V12H36V10H40V16H8V10H12V12ZM8 20V40H40V20H8ZM16 6H32V4H36V6H40C42.2091 6 44 7.79086 44 10V40C44 42.2091 42.2091 44 40 44H8C5.79086 44 4 42.2091 4 40V10C4 7.79086 5.79086 6 8 6H12V4H16V6Z" fill="#0D3273" />
            </svg>;
            break;
    }

    return (
        <a href="#" className='small-card'>
            <div className='small-card-content'>
                {icon}
                <p className='text-card-count'>{count}</p>
                <p className='text-card-title'>{type}</p>
            </div>
        </a>
    );
}

function LargeCard({type, title}) {
    return (
        <div className='large-card'>    
            <h1 className='text-card-title'>{title}</h1>
        </div>
    );
}

const Dashboard = () => {
    return (
        <div id='dashboard'>
            <DashboardCard />
            <div className='card-wrapper'>
                <div className='small-cards'>
                    <SmallCard type={'Issues'} count={3} />
                    <SmallCard type={'EC'} count={1} />
                    <SmallCard type={'Urgent EC'} />
                    <SmallCard type={'Archived'} count={6} />
                </div>
                <div className='large-cards'>
                    <LargeCard title={"Unable to access QMPlus"}/>
                    <LargeCard title={"Extension on ECS414U"}/>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;
