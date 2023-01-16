
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import { HookUseContext } from "./hooks/HookUseContext"
function App() {
  return (
    <div className="App">
      <HookUseContext>
        <BrowserRouter>
          <Navbar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Navbar>
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
