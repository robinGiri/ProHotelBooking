import './App.css';
import Rooms from './components/Rooms'
import SingleRoom from './components/SingleRoom'
import Home from './components/Home'
import Error from './components/Error'


function App() {
  return (
    <div className="App">
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />

    </div>
  );
}

export default App;
