import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Browse from './components/Browse/Browse';
import Favorites from './components/Favorites/Favorites';
import About from './components/About';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Route component={Home} path='/' exact />
        <Route component={Browse} path='/browse' />
        <Route component={Favorites} path='/stars' />
        <Route component={About} path='/about' />
      </BrowserRouter>
  );
}



export default App;