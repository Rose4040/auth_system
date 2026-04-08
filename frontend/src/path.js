import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from './signup';
import App from './App';
import Login from './login';
function Path(){
return(
<BrowserRouter>
<Routes>
    <Route path='/' element={<App/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='login' element={<Login/>}/>
</Routes>
</BrowserRouter>
);

}
export default Path;