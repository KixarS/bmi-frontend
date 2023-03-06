import { Avatar, Container } from '@mui/material';
import React from 'react'
import BacktoTop from '../components/BacktoTop/BacktoTop';
import NavBar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div>
        <NavBar/>
        <Container sx={{height:'100rem'}}/>
        <Footer/>
    </div>
  )
}

export default Home ;