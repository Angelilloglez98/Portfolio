
function CardSkill({name, urlImage, level}){
    return(
        <div className=" flex flex-col justify-center items-center gap-5 my-5 min-w-56">
            <div style={{width:"144px", height:"144px"}}>
                <img src={urlImage} className="w-full"/>
            </div>
            <p className="font-bulletokilla text-customRed text-xl">{name}</p>
            <div className="relative bg-customWhite w-full h-2 rounded-full">
                <div className="absolute left-0 top-0 h-full tricolor rounded-full" style={{width:level+"%"}}></div>
            </div>
        </div>
    )
}

export default CardSkill