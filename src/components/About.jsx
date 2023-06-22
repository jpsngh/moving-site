

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 m-10">
  <h4 className=' font-bold text-4xl text-black font-mono' > About Us  </h4>
          
          <div className="flex flex-row justify-between items-center gap-5 m-5 p-5 ">


          <div className="google-map-code">
         
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.8404080033697!2d-79.7547809!3d43.734642099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b163c68234601%3A0x7c84000f86520487!2sBovaird%20Dr%20E%2C%20Brampton%2C%20ON!5e0!3m2!1sen!2sca!4v1687232987818!5m2!1sen!2sca" width="600" height="450" frameBorder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>

        <div className="p-5 flex flex-col gap-5">
            <h1 className=" text-2xl font-bold">
                Our Mission
            </h1>
            <p className="text-lg font-mono"> As a small moving company run by a close-knit family, our mission is to provide cost-friendly and personalized moving services that prioritize the needs and satisfaction of our customers. We understand that moving can be a financially demanding and stressful experience, and our goal is to make it affordable, efficient, and hassle-free for individuals, families, and businesses within the GTA.

</p>
        </div>

          </div>

    </div>
  )
}

export default About
