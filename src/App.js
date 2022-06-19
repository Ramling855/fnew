import "./App.css";
import React from "react";
import Signup from "./Signup";
import Data from "./Data";
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
  Link
} from "react-router-dom";
export default function App() {
  return (
    <Router>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><Link to="Data">
          <button>home</button>
        </Link></a>
        <Link to="signup">
          <button>Add data</button>
        </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
      
      </ul>
    </div>
  </div>
</nav>

      <div className="App">
        
        
        {/* <Switch> */}
        
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/Data" element={<Data />} />
        </Routes>
        {/* </Switch> */}
      </div>
    </Router>
  );
}
