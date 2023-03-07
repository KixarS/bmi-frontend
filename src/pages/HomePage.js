import React from 'react'
import NavBar from '../components/Tools/Navbar/Navbar'
import Footer from '../components/Tools/Footer/Footer';
import HomeCard from '../components/Data/Home/HomeCard';
function Home() {
  return (
    <div>
      <NavBar />
      <HomeCard />
      <iframe
        allow="microphone;"
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/85fd224e-ed13-478a-b57a-00aab549c7cc">
      </iframe>
      <Footer />
    </div>
  )
}

export default Home;