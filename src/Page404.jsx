import Title from "./components/Title"
import BarTop from "./components/BarTop"
function Page404() {
  
    return (
      <>
        <div className="404 flex flex-col bg-customYellow rounded-2xl h-full">
          <BarTop></BarTop>
          <div className="flex flex-col justify-center items-center h-full">
            <Title text="I haven't learned this yet, give me some time to learn it ;)" css="text-5xl font-bulletokilla text-center mb-10 text-customRed font-outline-p"></Title>
            
              <Title text="404 not found" css="text-5xl font-extrabold text-center text-customRed font-outline-p"></Title>
              <div className="iconError relative w-28 h-16 mt-10">
                <span className="block w-10 h-2 bg-customRed absolute -rotate-45 rounded-full"></span>
                <span className="block w-10 h-2 bg-customOrange-dos absolute rotate-45 rounded-full"></span>
                <span className="block w-10 h-2 bg-customRed absolute -rotate-45 right-0 rounded-full"></span>
                <span className="block w-10 h-2 bg-customOrange-dos absolute rotate-45 right-0 rounded-full "></span>
                <span className="mounth block w-6 h-6  absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border-customRed border-8"></span>
              </div>
            
          </div>
        </div>
      </>
    )
  }
  
  export default Page404