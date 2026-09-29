import './App.css';
import {useNavigate} from "react-router-dom";
import banner from './assets/banner.png' ;
import { Routes, Route } from "react-router-dom";
import Signup from "./signup";
import Login from './login';
function App() {
  const navigate=useNavigate();
  return (
    <><div className="body"></div>
          <Routes>
        <Route path="/" element={
          <>
            <div className="banner">
              <h2>Meal Mates</h2>
              <img src={banner}/>
            </div>

            <div className="button">
              <button onClick={() => navigate("/signup")}>
                Sign-in
              </button>
              <button onClick={()=> navigate("/login")}>Login</button>
            </div>
          </>
        } />
        
        <Route path='/login' element={<Login/>} />

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App;
