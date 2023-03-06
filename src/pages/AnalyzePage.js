import React from 'react'
import NavBar from '../components/Tools/Navbar/Navbar'
import Footer from '../components/Tools/Footer/Footer';
import { Container } from '@mui/material';

function Analyze() {
  return (
    <div>
        <NavBar/>
        <Container sx={{height:'100rem'}}/>
        <Footer/>
    </div>
  )
}

export default Analyze;