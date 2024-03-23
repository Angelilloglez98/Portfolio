import BarTop from "./components/BarTop";
import CardSkill from "./components/CardSkill";
import Title from "./components/Title";
import data from "../data/data.json"

function Skills(){
    const skills= data.skills
    console.log(skills);
    return(
        <div className="Skills flex flex-col bg-customYellow rounded-2xl h-full pb-10">
            <BarTop></BarTop>
            <Title text="Skills" css={"m-4 text-center md:text-start  md:text-8xl text-5xl  font-bulletokilla text-customOrange-uno font-outline-title 2xl:w-2/3"}></Title>
            <p className="text-customWhite font-bulletokilla  rounded p-2 text-2xl xl:text-4xl text-shadow text-center xl:text-left  px-5">Technologies that I have learnt in courses and trainings as well as self-learning</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center">
                {
                    skills.map((element,key)=>{
                       return (<CardSkill name={element.nameTech} urlImage={element.urlImage} level={element.level} key={key}></CardSkill>)
                    })
                }
                
            </div>
        </div>
    )
}

export default Skills;