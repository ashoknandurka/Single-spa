
import { Link } from "@reach/router";
import React,{ useState ,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Root(props) {
  let mountValue = true;
  if (localStorage.getItem('data')) {
    mountValue = localStorage.getItem('data') === 'true'
  }

  const [mount,setMount] = useState(mountValue);

  useEffect(()=>{
     localStorage.setItem('data',mount);
  });

  return (
    <div className="ms-3">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link className="navbar-brand" to="/">
             Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="navbar-brand" to="/header">
             Header
          </Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand" to="/test">
             Test
          </Link>
          <input 
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={()=>setMount(!mount)}
            checked ={mount}
              />
        </li>
      </ul>
  </div>
  )
}
