import  {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Nav from "./components/Nav"

function App(){
  return(
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/contact" Component={Contact} />
      <Route exact path="/about" Component={About} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;