import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PrivateRoute from './routes/PrivateRoute';
import './styles/theme.css';
import Logout from './pages/Logout';
import New from './pages/New';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import "./styles/loader.css"; 
import Search from './pages/Search';
import All from './pages/All';

const App = () => {
    return (
        <div>
        <div id="loader" className='loader-container' hidden={true} ><span className="loader"></span></div>
        <Router basename="/Gurutu">
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* <Route path="/list" element={<List />} /> */}
                    <Route path="/new" element={<New />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/all" element={<All />} />
                    <Route path="/logout" element={<Logout />} />
                </Route>
                {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
                <Route path="/login" element={<Login />}  />
                <Route path="/" element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
        <ToastContainer position="top-center" autoClose={3000} draggable />
        </div>
    );
};

export default App;