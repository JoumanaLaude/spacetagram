import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import FetchAPOD from './components/FetchAPOD';
import Past from './components/Past';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div>
          <Route component={Home} path="/" exact />
          <Route component={FetchAPOD} path="/apod" />
          <Route component={Past} path="/past" />
        </div>
      </BrowserRouter>
  );
}

export default App;