import { BrowserRouter, Route } from 'react-router-dom';
import Today from './components/Today';
import Past from './components/Past';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Route component={Today} path='/' exact />
        <Route component={Past} path='/past' />
    </BrowserRouter>
  );
}



export default App;