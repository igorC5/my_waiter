import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Importando da biblioteca correta
import './styles/style.css';
import LoginPage from './pages/loginPage';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
    </Router>
  );
}

export default App;