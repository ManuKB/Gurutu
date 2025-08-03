import React from 'react';
import NavBar from '../navigation/NavBar';

const All: React.FC = () => {
    return (
       <div className="main-layout">
             <NavBar name='All' />
           <div className="content-area">
                <h1>All Items</h1>
                {/* Additional dashboard content can go here */}
            </div>
        </div>
    );
};

export default All;