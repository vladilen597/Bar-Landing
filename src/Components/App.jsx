import Header from './Header/Header.jsx'
import Hero from './Hero/Hero.jsx'
import Menu from './Menu/Menu.jsx'
import CafeEvents from './CafeEvents/CafeEvents.jsx'
import Techrider from './Techrider/Techrider.jsx'
import WhereToFind from './WhereToFind/WhereToFind.jsx'

import './App.scss'
import Footer from './Footer/Footer.jsx'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Menu />
      <CafeEvents />
      <Techrider />
      <WhereToFind />
      <hr className='app__footer-splitter' />
      <Footer />
    </div>
  )
}

export default App
