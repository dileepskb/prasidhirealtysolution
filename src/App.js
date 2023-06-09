// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
          <Routes>
             <Route exact path="/" element={<Home />} />
             <Route exact path="/about" element={<About />} />
             <Route exact path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
