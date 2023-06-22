

const Testimonials = () => {
    const test = [{
        message:`"Very professional and helped me with my backyard moving as well,cared about my belongings as their own,5 stars"`,
        name:" Rabjot ",
        img:"./static/r2.PNG"
    },{
        message:`" I was new in canada and was not very familiar with cost of moving,after getting overwhelmed by everywhere, i was fortunate my friend suggested me to you guys,Thanks"`,
        name:" Bilal " ,
        img:"./static/b3.PNG" 
    },{
        message:`"Moving from my basement was a very difficult task and i was very worried but these guys were spot on both the times i have used their services"`,
        name:"Hannah ",
        img:"./static/h2.PNG"
    }]
  return (
    <div className=" bg-white  gap-10 justify-center items-center w-full my-20  flex flex-col ">
        <h4 className="text-black font-bold text-4xl font-mono "> Testimonials </h4>
        <div className=" flex flex-row justify-around items-center gap-3 m-5"> 
       {test.map((data)=>{
    return <div key={data.name} className=" flex mx-5  justify-center items-center flex-col w-[350px] h-[320px] shadow border ">
        <img src={data.img} className="rounded-full m-2 p-2 circle w-[120px]  h-[100px]" ></img>
        <h1 className="p-2 m-2 font-thin text-xl"> {data.message}</h1>
        <h3 className="p-2 font-bold">~{data.name}</h3>
    </div>
       })}
    </div>

    <div className='bg-yellow-400 w-full h-[50px] my-[100px]'>

    </div>
    </div>
  )
}

export default Testimonials
