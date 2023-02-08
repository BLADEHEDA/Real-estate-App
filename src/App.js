import logo from './logo.svg';
import './App.css';
import Navbar from './components/SHARED/Navbar';
import Home from './components/HOME/Home';
import Footer from './components/SHARED/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
   <Home/>
   <Footer/>
    </div>
  );
}

export default App;
