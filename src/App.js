import './App.css';
import {BrowserRouter as Router, Routes, Route, useRoutes} from "react-router-dom";
import AllCoinsPage from './pages/AllCoinsPage';
import CryptoNewsPage from './pages/CryptoNewsPage';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import {useSelector} from "react-redux";
import {loggedIn} from './redux/reducers/loggedIn';

function App() {
    const loggedInState = useSelector((state) => state.loggedIn.value);
    return (
        <Router>
        <div className="App">
        <Routes>
        {loggedInState > 0 ?
            <>
            <Route path='/'  element={<IndexPage />} />
            <Route path='/total'  element={<IndexPage />} />
            <Route path='/allcoins'  element={<AllCoinsPage />} />
            <Route path='/cryptonews'  element={<CryptoNewsPage />} />
            </>
            : 
            <>
            <Route path='/'  element={<LoginPage />} />
            <Route path='/total'  element={<LoginPage />} />
            <Route path='/allcoins'  element={<LoginPage />} />
            <Route path='/cryptonews'  element={<LoginPage />} />
            </>
        }
        </Routes>
        </div>
        </Router>
        );
}
export default App;
