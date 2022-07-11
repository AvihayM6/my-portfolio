import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="About" element={<About />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
