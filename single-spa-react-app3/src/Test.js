import React from "react";
import { Link } from "react-router-dom";

function Test() {
  return (
    <section className="mt-3 mb-3">
      <nav className="navbar bg-primary">
        <div className="d-flex flex-row ms-2">
          <Link to="/test1">
            <div className="text-white ms-3">Test1</div>
          </Link>

          <Link to="/test2">
            <div className="text-white ms-3">Test2</div>
          </Link>

          <Link to="/test3">
            <div className="text-white ms-3">Test3</div>
          </Link>
        </div>
      </nav>
      <div className="card m-auto mt-3" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">react-app-test</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Test;
