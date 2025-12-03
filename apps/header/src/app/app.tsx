import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import Search from 'search/Module';
import '../styles.css';

export function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/header/search">Search</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="headerROOOOO" />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
