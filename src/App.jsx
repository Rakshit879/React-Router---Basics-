import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import CountactUs from './Components/ContactUs/ContactUs';
import Github from './Components/Github/Github';
import Myparam from './Components/Myparam/Myparam';



function App() {

  return (
    <div className='main_container'>
      <div className='container'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Hero/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<CountactUs/>}></Route>
            <Route path='/github' element={<Github/>}></Route>
            <Route path='/myparam' element={<Myparam/>}></Route>

          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
