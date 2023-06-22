

const Footer = () => {
  return (
  
    <div className="bg-slate-800 flex flex-row justify-around items-center w-full min-h-[250px] text-white">
      <div className=" flex flex-col justify-center">

     <h1 className="text-xl font-bold gap-8 my-4 cursor-pointer"> Our Services </h1>

     <h2> Residential Moving </h2>
     <h2> Commercial Moving </h2>
     <h3> Loading and Unloading  </h3>
     <h3> Specialty Item Moving  </h3>
     <h3>Labour support</h3>
       
    
  
      </div>

      <div className=" flex flex-col justify-center gap-3">

<h1 className="text-xl font-bold"> Contact Us </h1>

<h2> 6479799596 </h2>
<h2> info@jkmovers.com </h2>
<h3> jkmovers@gmail.com  </h3>
  


 </div>


      <div className="flex flex-col  justify-center items-center ">
        <h2 className="text-2xl bg-white"><img src="./static/jk.png" className="w-[150px] h-[100px] "></img></h2>
        <p className="p-5 w-[200px]"> Efficient and Reliable Truck Moving Services in GTA </p>
        </div>


       
    </div>
  )
}

export default Footer
