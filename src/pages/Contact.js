import React from 'react'
import NavBar from '../components/Navbar/Navbar'
import ContactCard from '../components/ContactCard/ContactCard';
import { Box } from '@mui/system';

function Contact() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <ContactCard/>
    </Box>
      
  )
}

export default Contact;