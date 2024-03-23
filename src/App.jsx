import Home from "./Home"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import About from "./About"
import Education from "./education"
import Projects from "./projects"
import "./styles/custom.css"
import Page404 from "./Page404";
import Skills from "./Skills";




function App() {
  
  return (
    <>
      <div className="App min-h-screen w-full p-3 bg-customBlue flex justify-center ">
        
        <Router>
          <div className="w-full">
          <Routes>
            <Route path="/" exact element={<Home></Home>} />
            <Route path="/about" exact element={<About></About>}/>
            <Route path="/education" exact element={<Education></Education>}/>
            <Route path="/projects" exact element={<Projects></Projects>}/>
            <Route path="/skills" exact element={<Skills></Skills>}/>
            <Route path="*" exact element={<Page404></Page404>}/>
          </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
