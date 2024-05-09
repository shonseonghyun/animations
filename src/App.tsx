import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Boxs from "./components/Boxs/Boxs";
import Prj1 from "./components/Prj/Prj1";


function App() {
  return (
    <>
    
      <BrowserRouter>
        {/* <ul>
          <li>
            <Link to={'/boxs'}>Boxs</Link>
          </li>
          <li>
            <Link to={'/prj1'}>Prj1</Link>
          </li>
        </ul> */}
        <Routes>
          <Route path="/boxs" element={<Boxs />}></Route>
          <Route path="/prj1" element={<Prj1 />}></Route>
        </Routes>

      </BrowserRouter>
    </>
   
  );
}

export default App;
