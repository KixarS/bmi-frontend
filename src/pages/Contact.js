import React from 'react'
import ContactCard from '../components/ContactCard/ContactCard';
import { Box } from '@mui/system';
import NavBar from '../components/Navbar/Navbar';

function Contact() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <NavBar/>
      <ContactCard/>
    </Box>
      
  )
}

export default Contact;