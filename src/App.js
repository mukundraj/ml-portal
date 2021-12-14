import './App.css';
import './index.css';
import {Routes, Route} from "react-router-dom";

import {
  Home,
  About,
  Docs,
  Whoops404
} from "./pages"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/docs" element={<Docs />}/>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<Whoops404 />}/>
        </Routes>
    </div>
  );
}

export default App;
