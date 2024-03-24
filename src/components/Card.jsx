
function Card({text,height}){



    return (
        <a href={"/"+text}>
            <div className='bg-customWhite rounded w-442 h-max '>
                <div className="flex">
                    <div className="flex flex-col justify-center content-center gap-1">
                        <label className="bg-customOrange-uno h-1 w-4 rounded-r-md flex justify-center content-center"></label>
                        <label className="bg-customOrange-dos h-1 w-4 rounded-r-md flex justify-center content-center"></label>
                        <label className="bg-customRed h-1 w-4 rounded-r-md flex justify-center content-center"></label>
                    </div>
                    <div className={`mx-8 flex-1 ${height}`}>
                        <p className="font-bulletokilla text-customRed text-center text-xl">{text}</p>
                    </div>
                    <div className="flex flex-col justify-center content-center gap-1">
                        <label className="bg-customOrange-uno h-1 w-4 rounded-l-md flex justify-center content-center"></label>
                        <label className="bg-customOrange-dos h-1 w-4 rounded-l-md flex justify-center content-center"></label>
                        <label className="bg-customRed h-1 w-4 rounded-l-md flex justify-center content-center"></label>
                    </div>
                </div>
            </div>
        </a>
    )
}
export default Card
