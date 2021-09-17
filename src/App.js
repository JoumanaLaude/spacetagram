import { BrowserRouter, Route } from 'react-router-dom';
import Today from './components/Today';
import Past from './components/Past';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div>
          <Route component={Today} path="/" exact />
          <Route component={Past} path="/past" />
        </div>
      </BrowserRouter>
  );
}

export default App;