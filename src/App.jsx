import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import KonselingPage from './pages/KonselingPage';
import './index.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/konseling" element={<KonselingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
