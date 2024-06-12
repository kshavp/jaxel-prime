import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ToJSON from './pages/ToJSON';
import ToCSV from './pages/ToCSV';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="bg-white">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
      </div>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jsontocsv' element={<ToCSV />} />
        <Route path='/csvtojson' element={<ToJSON />} />
      </Routes>
    </div>
    
    </div>
  )
}

export default App;