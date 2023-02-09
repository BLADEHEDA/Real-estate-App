import logo from './logo.svg';
import './App.css';
import Navbar from './components/SHARED/Navbar';
import Home from './components/HOME/Home';
import Footer from './components/SHARED/Footer';
import About from './components/ABOUT/About';

function App() {
  return (
    <div className="App">
    <Navbar/>
   {/* <Home/> */}
   <About/>
   <Footer/>
    </div>
  );
}

export default App;
