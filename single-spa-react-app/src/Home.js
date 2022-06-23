import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return ( 
        <section className='mt-3 mb-3'>
        <nav className="navbar bg-primary">
          <div className="d-flex flex-row ms-2">
          
        <Link to="/home1">
          <div className="text-white ms-3">
             Home1
          </div>
        </Link>

        <Link to="/home2">
          <div className="text-white ms-3">
             Home2
          </div>
        </Link>
        
        <Link to="/home3">
          <div className="text-white ms-3">
             Home3
          </div>
        </Link>
      
          </div>
        </nav>
       <div className="card m-auto mt-3" style={{width: "60rem"}}>
         <div className="card-body">
           <h5 className="card-title">react-app-Home</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         </div>
       </div>
      </section>
     );
}

export default Home;