import { Switch, Route, Redirect} from 'react-router-dom';
import Podcast from './Components/Podcast';
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar'
import './css/App.css';
import Home from "./Components/Home";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/podcast" component={Podcast} />
        <Route exact path="/conatct" component={Contact} />
        <Redirect to="/" />
        <Home />
      </Switch>  
    </div>
  );
}

export default App;
