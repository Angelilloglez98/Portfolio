import { useState } from "react";
import data from "../data/data.json"
import BarTop from "./components/BarTop"
import Title from "./components/Title"

function Projects() {
  const projects = data.projects;
  const [targetProject,setTargetProject]=useState(projects[0]);
  
    return (
      <>
        <div className="projects flex flex-col bg-customYellow rounded-2xl h-full pb-10 ">
          <BarTop></BarTop>
          <Title text="Projects" css="m-4 text-center md:text-start  md:text-8xl text-5xl  font-bulletokilla text-customOrange-uno font-outline-title 2xl:w-2/3"></Title>
          <div className="grid grid-cols-1 md:grid-cols-2 px-10">
            <div className="description text-3xl flex flex-col justify-center items-center text-customRed ">
              <p className="name font-bulletokilla w-full font-outline-title text-customOrange-uno my-10 text-center text-3xl md:text-5xl md:text-start"> {targetProject.name}</p>
              <p className="description font-bulletokilla text-2xl">{targetProject.description}</p>
              <p className="description font-bulletokilla my-10 text-customWhite text-shadow">
                {
                  targetProject.tech.map((element,key)=>{
                    return(
                    <span key={key}>
                      -{element}-
                    </span>)
                  })
                }
              </p>
              {targetProject.url?<button className="description bg-customRed text-customWhite py-1 px-3 rounded-xl font-bulletokilla"><a href={targetProject.url}>Visit Project</a></button>:""}
            </div>
            

            <div className="list-Projects font-bulletokilla w-full h-[20rem] md:h-[40rem] rounded-2xl gap-5 flex flex-wrap p-5 overflow-y-auto hiddenScrollBar">

              {
                projects.map((element,key)=>{
                  return (
                    <div key={key} onClick={()=>setTargetProject(element)} className=" hover:cursor-pointer w-full bg-customWhite rounded-2xl border-customOrange-uno border-y-4">
                      
                      <img src={element.img} className="object-cover rounded-2xl"/>
                      
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Projects