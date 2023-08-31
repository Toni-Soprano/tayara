import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import {BrowserRouter , Routes , Route , Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Nav/>
        <Home/>


    </BrowserRouter>

  );
}

export default App;
