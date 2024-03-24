
import { useNavigate,useLocation } from "react-router";
import Title from "./Title";
import { useState } from "react";

function Searcher() {
    const navigate=useNavigate();
    const location=useLocation();
    let interval;
    const [text,setText]=useState("");


    const changeUrl=(e)=>{
        e.preventDefault();
        let valueForm = e.target.searcher.value.toLowerCase()
        const regex= /^\/?[a-z-Z]*$/

        if (location.pathname=="/") {
            if (regex.test(valueForm)){
                navigate(valueForm)
            }else{
                setText("No es una url válida");
            }
        }else{
            if (!valueForm.includes('/')) {
                if (regex.test(valueForm)){navigate("/"+valueForm)}else{setText("No es una url válida")}
            }else{
                if (regex.test(valueForm)){ navigate(valueForm)}else{setText("No es una url válida")}
            }   
        }
    }

    const activeBlink=(e)=>{
        e.target.style.borderColor = "#DD5845"
        interval = setInterval(() => {
            e.target.style.borderColor = e.target.style.borderColor === 'transparent' ? '#DD5845' : 'transparent';
          }, 1200);
    }

    const desactiveBlink=(e)=>{
        e.target.style.borderColor = "transparent"
        clearInterval(interval);
    }
    
    return (
        <>
            <form className="flex justify-center" onSubmit={changeUrl}>
                <input type="text" name="searcher" className={`bg-customWhite border-4 min-w-56 border-transparent w-full h-9 xl:h-20 rounded-tl-full rounded-br-full outline-none font-bulletokilla text-customRed px-10 caret-customRed`} onFocus={activeBlink} onBlur={desactiveBlink} />
                <input type="submit" value="Buscar" hidden/>
            </form>
            <Title text={text}></Title>
        </>
    )
}

export default Searcher;