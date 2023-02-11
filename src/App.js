import { BrowserRouter,  Routes,Route,Link} from "react-router-dom";
import './App.css';
import Home from './components/HOME/Home';
import About from './components/ABOUT/About';
import PropertyList from './components/PROPERTY/PropertyList';
import PropertyType from './components/PROPERTY/PropertyType';
import PropertyAgents from './components/PROPERTY/PropertyAgents';
import Testimony from './components/PAGES/Testimony';
import Error from './components/PAGES/Error';


function App() {
  return (
    <BrowserRouter className="App">
      <Routes> 
    <Route path='/' element={<Home/>} />
    <Route path='About' element={<About/>} />
    <Route path='PropertyList' element={<PropertyList/>} />
    <Route path='PropertyType' element={<PropertyType/>} />
    <Route path='PrpertyAgents' element={<PropertyAgents/>} />
    <Route path='Testimony' element={<Testimony/>} />
    <Route path='*' element={<Error/>} />

    {/* <Route path='/' element={<Home/>} /> */}

   </Routes>
    </BrowserRouter>
  );
}

export default App;
