// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
          <Routes>
             <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
