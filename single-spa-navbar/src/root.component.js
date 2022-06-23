
import { Link } from "@reach/router";
import React from "react";


export default function Root(props) {

//   const event = new Event('build');

// // Listen for the event.
// document.getElementById('test').addEventListener('build', function (e) { console.log("this is event build") }, false);

// // Dispatch the event.
// document.getElementById('test').dispatchEvent(event);

  return (
    <div className="ms-3">
    {/* <Link className="navbar-brand" to="/">
      Home
    </Link> */}
    {/* <div class="collapse navbar-collapse"> */}
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
        </li>
      </ul>
    {/* </div> */}
  </div>
  )
  //  <section>{props.name} is mounted!</section>;
}
