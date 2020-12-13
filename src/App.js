import "./App.css";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { Switch, Route } from "react-router-dom";
import NavBar from './components/Navbar'

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
