
import TeamSection from '../components/TeamSection'
import Team from '../components/Team'
import Alumni from '../components/Alumni'
import Contact from '../components/Contact'
import Mission from '../components/Mission'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import LeadershipSection from '../components/LeadershipSection'
//import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <div>
            <Header />
      </div>
      
      <Hero />
      <About/>
      <div className=''>
        <Mission/>
          <Alumni/>
          <LeadershipSection/>
          <TeamSection/>
          <Team/>
          <Contact/>
          <Footer/>
         
      </div>
         
       
    </div>
  )
}

export default Home
