import logo from './logo.svg';
import './App.css';
import Navbar from './components/SHARED/Navbar';
import Home from './components/HOME/Home';
import Footer from './components/SHARED/Footer';
import About from './components/ABOUT/About';
import PropertyList from './components/PROPERTY/PropertyList';

function App() {
  return (
    <div className="App">
    <Navbar/>
   {/* <Home/> */}
   {/* <About/> */}
   <PropertyList/>
   <Footer/>
    </div>
  );
}

export default App;
