import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home1 from './Home1';
import Home3 from './Home3';
import Home2 from './Home2';
import Home from './Home';


export default function Root(props) {
  return(
      <div>
         <BrowserRouter basename='/'>
            <Home />
            <Routes>
              <Route path='/home1' element={<Home1 />} />
              <Route path='/home2' element={<Home2 />} />
              <Route path='/home3' element={<Home3 />} />
            </Routes>
        </BrowserRouter>  
    </div>
  ); 
}
