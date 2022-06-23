import React from 'react';
import Test from './Test';
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Root(props) {
  console.log("props:",props);
  return (
       <div>
        { (props.authToken) ?
         <BrowserRouter basename='/test'>
         <Test />
            <Routes>
              <Route path='/test1' element={<Test1 />}/>
              <Route path='/test2' element={<Test2 />}/>
              <Route path='/test3' element={<Test3 />}/>
            </Routes>
         </BrowserRouter>
          : "not avilable"  }
       </div>
  );
}
