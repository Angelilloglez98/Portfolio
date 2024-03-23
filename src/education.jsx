import BarTop from "./components/BarTop"
import Title from "./components/Title"
import data from "/data/data.json"

function Education() {
    const dataSorted = data.education.sort((a,b)=>b.year - a.year);
    
    return (
      <>
        <div className="about flex flex-col bg-customYellow rounded-2xl h-full">
          <BarTop></BarTop>
          <Title text="Education" css={"m-4 text-center md:text-start  md:text-8xl text-5xl  font-bulletokilla text-customOrange-uno font-outline-title 2xl:w-2/3"}></Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-20">
            {
              dataSorted.map((element,key) => {
                return <div key={key} className="flex flex-col text-center md:text-left">
                          <p className="text-2xl mx-4 font-bulletokilla text-customBlue font-outline-p">{element.description}</p>
                          <p className="text-xl mx-4 font-semibold text-customRed">[{element.place??element.place} {element.year}]</p>
                          <div className="mx-4 my-10 tricolor h-2 rounded-full"></div>
                       </div>
              })
            }
          </div>
        </div>
      </>
    )
  }
  
  export default Education