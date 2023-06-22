 

const Header = () => {
  return (
    <div className="w-screen bg-white text-gray-500  z=20 sticky flex items-center font-mono   shadow-xl justify-between p-1  mx-auto ">
     
    <div>
      <h4 className=" text-3xl">
        <img src="./static/jk.png" className="w-[150px] h-[100px]"></img>
      </h4>
    </div>
    <div className=" flex flex-row items-center justify-center gap-8">
      <h3 className="text-xl hidden md:block">
        <a href="#home"> 
       Home
       </a>
      </h3>
      <h3 className="text-xl hidden md:block">
        <a href="#services"> Services</a>
      
      </h3>
      <h3 className="text-xl hidden md:block">
      <a href="#about">  About Us</a>
    
      </h3>
      <div>
      <button type="button" className="text-black bg-yellow-300 hover:animate-bounce  hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-yellow-500 dark:focus:ring-yellow-500 mr-2 mb-2">
  
<a href="tel:+16479799596"> Call Us  </a>
</button>

      </div>
    </div>

 </div>
  )
}

export default Header
