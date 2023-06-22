

const Gallery = () => {
  return (
    <div className=" w-full min-h-screen flex flex-col items-center justify-center  ">
      <h2 className="text-4xl font-bold font-mono"> Our Services </h2>
   <div className=" grid grid-cols-4 gap-5 my-10 ">

    <div className=" w-[350px] h-[500px] border shadow-xl  hover:w-[400px] hover:h-[600px] hover:z-20 bg-slate-50">
       <img className="p-5" src="./static/resident.jpg"></img>
        <h1 className="p-5 text-bold text-2xl font-medium "> Residential Moving </h1>       
       <h3 className="p-2 hover:text-lg font   ">Whether you are moving to a new house or apartment within the GTA or relocating from another city, our residential moving service is tailored to meet your needs. We handle the entire process, from packing and loading to transportation and unpacking.</h3>
    </div>
    <div className=" w-[350px] h-[500px] border shadow-xl  hover:w-[400px] hover:h-[600px] hover:z-20 bg-slate-50">
       <img className="p-5" src="./static/commercial.jpg"></img>
        <h1 className="p-5 text-bold text-2xl font-medium"> Commercial Moving</h1>       
       <h3 className="p-2 hover:text-lg ">We understand the complexities involved in commercial moves, and our team is equipped to handle them seamlessly. Whether you are relocating your office, retail space, or any other commercial establishment, we provide efficient and organized moving services. </h3> </div>
    <div className="w-[350px] h-[500px] border shadow-xl  hover:w-[400px] hover:h-[600px] hover:z-20 bg-slate-50">
       <img className="p-5" src="https://twoamigos.com/wp-content/uploads/2021/08/packing-services.jpg"></img>
        <h1 className="p-5 text-bold text-2xl font-medium "> Loading and Unloading </h1>       
       <h3 className="p-2 hover:text-lg">Our team of experienced movers is trained in efficient and safe loading and unloading techniques. We handle heavy furniture, delicate items, and everything in between with utmost care.</h3>
    </div>
    <div className=" w-[350px] h-[500px] border shadow-xl  hover:w-[400px] hover:h-[600px] hover:z-20 bg-slate-50">
       <img className="p-5" src="./static/piano.jpeg"></img>
        <h1 className="p-5 text-bold text-2xl font-medium "> Specialty Item Moving </h1>       
       <h3 className="p-2 hover:text-lg ">We understand that some items require special attention and handling. Whether you need to move pianos, artwork, antiques, or other valuable and delicate items, our specialized moving service ensures their safe transportation.</h3>
    </div>
   
    
    
    
    
   
   
   </div>

   <button className=" mx-15 my-10 text-black bg-yellow-300 shadow-xl hover:animate-bounce  hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium   rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-yellow-500 dark:focus:ring-yellow-500 mr-2 mb-2" > View All Services </button>
   

       
    </div>
  )
}

export default Gallery
