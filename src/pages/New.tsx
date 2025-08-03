import React from 'react';
import NavBar from '../navigation/NavBar';

const Dashboard: React.FC = () => {
    return (
       <div className="main-layout">
             <NavBar name='New' />
           <div className="content-area">
                <h1>New</h1>
                {/* Additional dashboard content can go here */}
            </div>
        </div>
    );
};

export default Dashboard;