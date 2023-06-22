
import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Intro from './components/Intro';
import Cards from './components/Cards';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Forms from './components/Forms';
import About from './components/About';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false);

  return (
 <div className='h-screen w-full flex flex-col overflow-auto '> 
<Header></Header>
<section id="home"> <Intro setOpen={setOpen}></Intro></section>

<Cards></Cards>
<Testimonials></Testimonials>
<section id="services"> <Gallery></Gallery></section>

<Forms setOpen={setOpen}></Forms>
<section id="about"> <About></About></section>

<section id="contact"> <Footer></Footer></section>

<div className="bg-white h-[100px] w-full p-5">

</div>

</div>
 
   
 
  )
}

export default App
