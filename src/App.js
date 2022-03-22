import './App.css';
import {BrowserRouter as Router, Routes, Route, useRoutes} from "react-router-dom";
import Index from './pages/Index';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route path='/'  element={<Index />} />
    </Routes>
    </div>
    </Router>
  );
}
export default App;
