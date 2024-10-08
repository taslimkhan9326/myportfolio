import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import NavLeft from './component/NavLeft';
import ResumePage from './component/ResumePage';
import Project from './component/Project';

function App() {
  return (
    <Router>
      <div>
        <NavLeft /> {/* Always visible navigation */}
        <Routes>
          {/* Define the routes */}
          <Route path="/home" element={<HomePage />} /> {/* HomePage for the root path */}
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
