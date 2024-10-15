import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Protected from './components/Protected';
import NewPassword from './components/NewPassword';
import ResetPassword from './components/ResetPassword';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password/:token" element={<NewPassword />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/protected" element={<Protected />} />
      </Routes>
    </Router>
  );
}

export default App;
