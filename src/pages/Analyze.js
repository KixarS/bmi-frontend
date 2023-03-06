import React from 'react'
import NavBar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer';
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