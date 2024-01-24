import React from 'react'
import { Routes , Route ,BrowserRouter} from 'react-router-dom';
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Home from  '../Pages/Home/Home'
import  About from '../Pages/About/About'
import Appointment from '../Pages/Appointment/Appointment'
import Department from '../Pages/Department/Department'
import Contact from '../Pages/Contact/Contact'
import Pediatrics from '../Depart-pages/Pedatics/Pediatrics'
import Wellness from '../Depart-pages/Wellness/Wellness'
import Gyneo from '../Depart-pages/Gynecology/Gyneo'
import General from '../Depart-pages/General/General'
import NotFound from '../Pages/Notfound/NotFound';


function Layout() {
  return (
    <>
        <BrowserRouter>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/make-an-appointment' element={<Appointment/>}/>
        <Route path='/department' element={<Department/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/pediatrics' element={<Pediatrics/>}/>
        <Route path='/wellness' element={<Wellness/>}/>
        <Route path='/Gynaecology-obstetrics' element={<Gyneo/>}/>
        <Route path='/general-Laparoscopic-surgery' element={<General/>}/>
      </Routes>
      <Footer/>
        </BrowserRouter>
    </>
  )
}

export default Layout