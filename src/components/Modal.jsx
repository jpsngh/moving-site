/* eslint-disable react/prop-types */
import { CloseCircleOutlined,PhoneOutlined,MailOutlined,FormOutlined } from "@ant-design/icons"

const Modal = (props) => {

  return (
    <div className=" flex  mx-[30%] my-[10%]  bg-yellow-400 shadow-xl shadow-black border border-gray-500  rounded-lg flex-col  gap-5 p-5   absolute z-20 w-[450px] h-[250px] md:w-[550px] md:h-[250px] transition ease-in-out">
          
          <div className="  mx-[90%] "> <button className="  p-3 " onClick={()=>props.setIsOpen(false)}> <CloseCircleOutlined /></button></div>
      <div className=" grid grid-cols-3 justify-around items-center  gap-5 md:mx-[80px]   "> 
 <div className="  flex items-center flex-col justify-center gap-5  text-2xl   cursor-pointer"> 
 <a  href="tel:+16479799596">
 <button > <PhoneOutlined /></button> 
 
 </a>
 <p className=""> Call us</p>
 </div>
 <div className="p-1 flex items-center flex-col justify-center gap-5  text-2xl   cursor-pointer"> <a  href="mailto:jkmovers@gmail.com"> <button> <MailOutlined /></button>  </a> 
 <p>  Email </p> </div>
 <div className="p- flex items-center flex-col justify-center gap-5  text-2xl   cursor-pointer"> <a  href="https://forms.gle/Yzdj5QprGsB2RHLh8"> <button > <FormOutlined /></button></a>  
 
 <p> Submit </p>
  </div>
    </div>

    </div>
  )
}

export default Modal
