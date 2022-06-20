import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home"
import EducationCenter from "./Pages/EducationCenter"
import ForTheDeaf from "./Pages/ForTheDeaf"
import OrganizationStructure from "./Pages/OrganizationStructure"
import ServiceAndActivity from "./Pages/ServiceAndActivity"
import Employee from "./Pages/Employee"
import NotFound from "./Pages/NotFound"
import Header from "./Pages/Components/Header"

function App() {
  return (
   <div className='bg-primary min-h-screen pt-16 md:pt-20'>
      <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/hoh-education-center-for-the-hearing-impaired' element={<EducationCenter/>}/>
        <Route exact path='/hoh-school-for-the-deaf' element={<ForTheDeaf/>}/>
        <Route exact path='/structure' element={<OrganizationStructure/>}/>
        <Route exact path='/service-activity/:seract_id' element={<ServiceAndActivity/>}/>
        <Route exact path='/structure/employee/:emp_id' element={<Employee/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
   </div>
  )
}

export default App