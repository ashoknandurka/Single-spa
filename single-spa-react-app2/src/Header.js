import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return ( 
        <section className="mt-3 mb-3">
        <nav className="navbar bg-primary">
          <div className="d-flex flex-row ms-2">

               <Link to="/header1">
                 <div className="text-white ms-3">
                     Header1
                 </div>
              </Link>

              <Link to="/header2">
                  <div className="text-white ms-3">
                      Header2
                  </div>
              </Link>

              <Link to="/header3">
                 <div className="text-white ms-3">
                     Header3
                 </div>
              </Link>

            </div>
          </nav>
        <div className="card m-auto mt-3" style={{width: "30rem"}}>
           <div className="card-body">
             <h5 className="card-title">react-app-header</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
        </div>
      </section>
     );
}

export default Header;