import Login from './components/Login';
import './assets/style.css'
import logo from './logo.svg';
import {BrowserRouter, Routes, Route, Redirect} from 'react-router-dom';
import Verify from './components/Verify';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
