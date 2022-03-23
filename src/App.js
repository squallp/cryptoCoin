import './App.css';
import {BrowserRouter as Router, Routes, Route, useRoutes} from "react-router-dom";
import Index from './pages/Index';
import IndexTestPage from './pages/IndexTest';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route path='/'  element={<Index />} />
    <Route path='/indextest'  element={<IndexTestPage />} />
    </Routes>
    </div>
    </Router>
  );
}
export default App;
