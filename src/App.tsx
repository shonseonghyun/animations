import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Boxs from "./components/Boxs/Boxs";
import Project from "./components/Prj/Project";


function App() {
  return (
    <>
    
      <BrowserRouter>
        <ul>
          <li>
            <Link to={'/boxs'}>Boxs</Link>
          </li>
          <li>
            <Link to={'/project'}>Prj1</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/boxs" element={<Boxs />}></Route>
          <Route path="/project" element={<Project />}></Route>
        </Routes>

      </BrowserRouter>
    </>
   
  );
}

export default App;
