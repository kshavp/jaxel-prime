import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ToJSON from './pages/ToJSON';
import ToCSV from './pages/ToCSV';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jsontocsv' element={<ToCSV />} />
        <Route path='/csvtojson' element={<ToJSON />} />
      </Routes>
    </div>
  )
}

export default App;