import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import Header from 'header/Module';

export function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/header">Header</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="homepage" />} />
        <Route path="/header/*" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
