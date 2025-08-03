import React from 'react';
import NavBar from '../navigation/NavBar';

const Search: React.FC = () => {
    return (
       <div className="main-layout">
             <NavBar name='Search' />
           <div className="content-area">
                <h1>Search</h1>
                {/* Additional dashboard content can go here */}
            </div>
        </div>
    );
};

export default Search;