import logo from './logo.svg';
import './App.css';
import Addbooks from './components/Addbooks';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Searchbook from './components/Searchbook';
import Navbar1 from './components/Navbar1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewbook from './components/Viewbook';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Addbooks/>}/>
      <Route path="/search" exact element={<Searchbook/>}/>
      <Route path="/viewbook" exact element={<Viewbook/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
