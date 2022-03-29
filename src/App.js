import './App.css';
import {BrowserRouter as Router, Routes, Route, useRoutes} from "react-router-dom";
import AllCoinsPage from './pages/AllCoinsPage';
import CryptoNewsPage from './pages/CryptoNewsPage';
import IndexPage from './pages/IndexPage';
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
            <Route path='/'  element={<AllCoinsPage />} />
            <Route path='/allcoins'  element={<AllCoinsPage />} />
            <Route path='/cryptonews'  element={<CryptoNewsPage />} />
            </>
            : <>
            <Route path='/'  element={<IndexPage />} />
            <Route path='/allcoins'  element={<IndexPage />} />
            <Route path='/cryptonews'  element={<IndexPage />} />
            </>
        }
        </Routes>
        </div>
        </Router>
        );
}
export default App;
