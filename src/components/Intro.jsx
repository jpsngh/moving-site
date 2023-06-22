
import { Typewriter } from 'react-simple-typewriter'
import Modal from './Modal'
import { useEffect, useState } from 'react'

 
// eslint-disable-next-line react/prop-types
const Intro = ({setOpen}) => {
  const [open,setIsOpen] = useState(false)
 useEffect(() =>{

 },[setIsOpen])



  return (

    <div className="w-screen relative flex flex-col ">
      <img className="  mix-blend-hard-light  w-screen h-[700px]" src="https://www.ezyvehiclerentals.com.au/wp-content/uploads/2019/07/furniture-removal-truck-moving-truck-hire-australia.jpg">
      </img>
      { open ?  <Modal setIsOpen={setIsOpen} setOpen={setOpen} open={open}></Modal>:""}

    
      <div       className=" absolute  text-xl flex-col my-[200px]  gap-10 text-white p-5
      ">
          <h4 className='text-white text-5xl mx-[150px] '>

          <img src="./static/jk.png" className="w-[250px] h-[150px] shadow-xl shadow-black  "></img>
          </h4>
      <h3 className='text-black bg-yellow-400 m-2 p-2 text-3xl mx-[0px] shadow-2xl shadow-black  rounded  border-black '>Fast and Affordable Truck Moving Solutions </h3>

      <div className='mx-[150px]'> 
      <Typewriter
 
      words={['Your Trusted Partner for Hassle-Free Truck Moving ', 'Get Moving with Confidence', 'Effortless Moves Guaranteed', 'Best Rates in Town']}
            loop={5}
            cursor
            cursorStyle={".."}
            typeSpeed={90}
            deleteSpeed={60}
            delaySpeed={1000}
            className="flex flex-row"
            >
         
      </Typewriter> 
      
      </div>
   <div className='mx-[150px] '>
   <button  onClick= {()=>setIsOpen(true)}type="button" className=" mx-15 my-10 text-black bg-yellow-400 hover:animate-bounce  hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium   rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-yellow-500 dark:focus:ring-yellow-500 mr-2 mb-2">

  Get Started
</button>


   </div>

      </div>
     <div className='bg-yellow-400 w-full h-[100px]  '>
        <div className='flex flex-row justify-around items-center p-5 text-2xl'> 

        <div className='flex flex-col text-white items-center '>
          <h1 className='bold font-bold'> 2+ </h1>
          <h3> Years </h3>

        </div>
        <div className='flex flex-col text-white items-center '>
          <h1 className='bold font-bold'> 5 </h1>
          <h3> Services </h3>

        </div>
        <div className='flex flex-col text-white items-center '>
          <h1 className='bold font-bold'> 100+ </h1>
          <h3> Moves </h3>

        </div>
        <div className='flex flex-col text-white items-center '>
          <h1 className='bold font-bold'> 50+ </h1>
          <h3> Served </h3>
          <h3></h3>

        </div>
          
        </div>
     </div>
     
     
     
    </div>
  )
}

export default Intro
