import BarTop from "./components/BarTop"
import Title from "./components/Title"


function About() {
  
  return (
    <>
      <div className="about flex flex-col bg-customYellow rounded-2xl h-full pb-10">
        <BarTop></BarTop>
        <div className="pt-16 grid grid-cols-1 xl:grid-cols-2">
          <div className="flex flex-col justify-center items-center gap-6 ">
            <div className="flex w-7/12 min-w-72">
              <img src="assets/icono.png" alt="" className="w-full"/>
            </div>
            <p className="text-customWhite font-bulletokilla rounded p-2 text-2xl text-shadow">[Web Developer]</p>
            <a href="assets/CVAngel.pdf" download={"CVAngel.pdf"}><button className="bg-customRed text-customWhite rounded p-3 font-bulletokilla hover:scale-105 " >Download CV</button></a>
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-9">
                  <a href="https://www.linkedin.com/in/%C3%A1ngel-garc%C3%ADa-gonz%C3%A1lez-21b6891b9/">
                    <img src="/assets/icons/linkedin-icon.png" alt="linkedin-icon" className="w-full" />
                  </a>
                </div>
                <a href="https://www.linkedin.com/in/%C3%A1ngel-garc%C3%ADa-gonz%C3%A1lez-21b6891b9/">
                  <p className="text-customWhite font-bulletokilla rounded p-2 text-2xl text-shadow">Ángel García González</p>
                </a>
              </div>
              <div className="flex items-center ">
                
                  <div className="w-9">
                    <a href="mailto:angelgarciaglez98@gmail.com">
                      <img src="/assets/icons/mail-icon.png" alt="mail-icon" className="w-full" />
                    </a>
                  </div>
                  <a href="mailto:angelgarciaglez98@gmail.com">
                    <p className="text-customWhite font-bulletokilla rounded p-2 text-2xl text-shadow break-all">angelgarciaglez<span className="font-sans font-extrabold">98</span>@gmail.com</p>
                  </a>
                  
                
              </div>
              
            </div>
          </div>
          <div className="flex items-center flex-col gap-6 justify-center m-10 xl:m-0"> 
            <div className=" self-center xl:self-start w-11/12 h-2 tricolor rounded-full my-6"></div>
            <Title text="Hi, I'm Angel Garcia" css={"text-center xl:text-start xl:text-9xl text-5xl font-bulletokilla text-customOrange-uno font-outline-title"}></Title>
            <p className="text-customWhite font-bulletokilla  rounded p-2 text-2xl xl:text-4xl text-shadow text-center xl:text-left  px-5">I am creative and self-taught, with abilities to work and learn in teams,  I stand out for creativity and the pursuit of solutions.  <br></br>Enjoying helping others in each project by fostering a collaborative environment.</p>
            <div className=" self-center xl:self-start w-11/12 h-2 tricolor rounded-full my-6"></div>
          </div>
        </div>
        
      </div>
    </>
  )
}
  
export default About