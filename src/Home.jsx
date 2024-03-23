
import Card from "./components/Card";
import Searcher from "./components/Searcher";
import Title from "./components/Title"
import "./styles/index.css";
import data from "../data/data.json"

function Home() {
  
    return (
      <div className="Home flex bg-customYellow rounded-2xl h-full">
        <div className=" w-20 h-20 hidden self-center sm:block sm:tricolor md:w-28 md:h-32 custom-cursor-auto"></div>

        <div className="flex-1 flex flex-col items-center justify-evenly gap-5 py-10 px-5">
            <Title text="Type Away to Explore, Get To Know Me!" css={" mx-2 md:text-8xl text-5xl  font-bulletokilla text-customOrange-uno font-outline-title text-center   2xl:w-2/3"}></Title>
            <div className="w-1/2 mx-auto">
                
              <Searcher></Searcher>
                
            </div>
            <p className="text-center font-bulletokilla rounded-md text-customWhite  text-lg md:text-3xl bg-customOrange-uno px-4 py-1 box-outline ">Type these URLs in the search engine</p>
            <div className="flex flex-wrap justify-center gap-4">
                
              {
                data.urls.map((element,key) => {
                  return <Card text={element} height={"my-5"} key={key}></Card>
                })
              }
              
            </div>
        </div>   
        
        <div className="w-20 h-20 hidden self-center sm:block sm:tricolor md:w-28 md:h-32 "></div>
      </div>
    )
    
  }
  
  export default Home