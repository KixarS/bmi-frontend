import { Avatar } from '@mui/material';
import React from 'react'
import BacktoTop from '../components/BacktoTop/BacktoTop';
import NavBar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div>
        <NavBar/>
        <Avatar
                                    sx={{ width: 1000, height: 1000 }}
                                    variant="square"
                                    src="/img/BMI-1-green.png"
                                />
        <BacktoTop/>
        <Footer/>
    </div>
  )
}

export default Home ;