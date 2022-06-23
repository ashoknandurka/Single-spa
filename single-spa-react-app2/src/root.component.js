import Header from "./Header";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Home3";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function Root(props) {
  return(
 <div>
   <BrowserRouter basename="/header">
     <Header />
     <Routes>
       <Route path="/header1" element={<Header1 />} />
       <Route path="/header2" element={<Header2 />} />
       <Route path="/header3" element={<Header3 />} />
     </Routes>
   </BrowserRouter>
 </div>
  );
}
