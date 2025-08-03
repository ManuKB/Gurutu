import React from 'react';
import NavBar from '../navigation/NavBar';

const Dashboard: React.FC = () => {
    return (
        <div className="main-layout">
            {/* <LeftNavigation /> */}
            <NavBar smallsidebar={true} name='Dashboard' />
            <div className="content-area">
                <h1>Dashboard</h1>
                {/* Additional dashboard content can go here */}
            </div>
        </div>
    );
};

export default Dashboard;