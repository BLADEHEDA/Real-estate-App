import logo from './logo.svg';
import './App.css';
import Navbar from './components/SHARED/Navbar';
import Home from './components/HOME/Home';
import Footer from './components/SHARED/Footer';
import About from './components/ABOUT/About';
import PropertyList from './components/PROPERTY/PropertyList';
import PropertyType from './components/PROPERTY/PropertyType';
import PropertyAgents from './components/PROPERTY/PropertyAgents';
import Testimony from './components/PAGES/Testimony';
import Error from './components/PAGES/Error';

function App() {
  return (
    <div className="App">
    <Navbar/>
   {/* <Home/> */}
   {/* <About/> */}
   {/* <PropertyList/> */}
   {/* <PropertyType/> */}
   {/* <PropertyAgents/> */}
   {/* <Testimony/> */}
   <Error/>
   <Footer/>
    </div>
  );
}

export default App;
