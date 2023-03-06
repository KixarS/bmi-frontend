import React from 'react'
import ContactCard from '../components/ContactCard/ContactCard';
import { Box } from '@mui/system';
import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function Contact() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <NavBar/>
      <ContactCard/>
      <Footer/>
    </Box>
      
  )
}

export default Contact;