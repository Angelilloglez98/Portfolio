import Card from "./Card"
import Searcher from "./Searcher"
import data from "../../data/data.json"
import { useEffect, useState } from "react"

function BarTop() {
    const [hidden,setHidden]=useState(true);

    useEffect(() => {
        const screenWidth = window.innerWidth;
        setHidden(screenWidth >= 100);
    }, []);

    return (
    <>
      
        <div className="flex w-full gap-4 p-4 flex-col xl:flex-row sticky top-0 bg-customYellow rounded-2xl z-50">
          <div className="flex gap-4 justify-center">
            <div>
              <Searcher/>
            </div>
            <button onClick={() => { setHidden(!hidden) }} className="xl:hidden rounded-full font-bulletokilla text-customOrange-dos text-2xl">{hidden?"X":"O"}</button>
          </div>

          <div className={`flex flex-col xl:flex-row gap-4 ${hidden ? 'hidden xl:flex' : 'flex xl:flex'}`}>
            {data.urls.map((element,key) => (
              <Card text={element} height={"my-3"} key={key}></Card>
            ))}
          </div>
        </div>
      
    </>
    )
}

export default BarTop