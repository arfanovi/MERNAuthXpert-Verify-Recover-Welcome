import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
