

const Cards = () => {
  return (
    <div className=' gap-10 flex-col text-black flex justify-center items-center  bg-white w-full h-full min-h-full '>

<h2 className="text-4xl m-5 font-bold font-mono"> Why Choose Us </h2>

        <div className="flex flex-col md:flex-row text-black gap-5 mx-9"> 
        <div className="  w-[300px] h-[250px] flex-col items-center justify-center">
      <img src="./static/wallet.svg" className='w-20 mx-[100px] p-1 '></img>
     
      <h4 className='p-5 m-2'> At our truck moving company, we understand that pricing is an important factor when choosing a service provider. That's why we take pride in offering competitive pricing without compromising on the quality of our services.</h4>
        </div >
        <div className="  w-[300px] h-[250px] flex-col items-center justify-center">
      <img src="./static/truck.svg" className='w-20 mx-[100px] p-1 '></img>
      <h4 className='p-5 m-2'> Trust is the foundation of our business. We understand the importance of your possessions and the trust you place in us to handle them. That's why we go above and beyond to earn and maintain your trust throughout the entire moving journey. </h4>
        </div >
        <div className="  w-[300px] h-[250px] flex-col items-center justify-center">
      <img src="./static/friends.svg" className='w-20 mx-[100px] p-1 '></img>
      <h4 className='p-5 m-2'> We take immense pride in being a family and friends-run business. Each person involved in our company, from family members to close friends, is a valued stakeholder and plays a crucial role in ensuring that our customers receive the highest level of service and care.</h4>
        </div >
        <div className="  w-[300px] h-[250px] flex-col items-center justify-center">
      <img src="./static/local.svg" className='w-20 mx-[100px] p-1 '></img>
      <h4 className='p-5 m-2'> Our experienced team has an in-depth understanding of the local traffic patterns and best routes to ensure timely transportation of your belongings. Whether you are moving within the city or across different GTA neighborhoods, we leverage our local knowledge to plan the most efficient route and optimize your moving experience.</h4>
        </div >
        
        </div>
    </div>
  )
}

export default Cards
