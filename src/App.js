import logo from './logo.svg';
import './App.css';
import Carousel from './Components/Carousel';
import Menu from './Components/Menu';
import { BrowserRouter as Router,IndexRoute, Switch, Route,} from "react-router-dom";
import About from './Components/About'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Work from './Components/Work'
import Home from "./Components/Home";
import "./Components/Fontawsomeicons";


function App() {
  return (
    <div className="">
      <Menu />
   {/* <Carousel />  */}
      <Switch>
         <Route exact path="/home" component={Carousel}  />
         <Route path="/about" component={About}  /> 
        <Route path="/work" component={Work} />
        <Route path="/skills" component={Skills} />
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
      </Switch>
  
    </div>
  );
}

export default App;
