import "./App.css";
import Rooms from "./components/Rooms";
import SingleRoom from "./components/SingleRoom";
import Home from "./components/Home";
import Error from "./components/Error";
import { Switch, Route } from "react-router-dom";
import NavBar from './comp/Navbar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
