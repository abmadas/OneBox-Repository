import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx'

import  Dashbord  from './components/Dashbord.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashbord />} />
            </Routes>
        </Router>
    );
}

export default App;