import { Routes, Route, Link } from 'react-router-dom';

import styleApp from './App.module.css'

import { Homepage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Notfoundpage } from './pages/Notfoundpage';

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <div className={styleApp.startDiv}>
        <h1>Get started with React-Router 6</h1>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Blogpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </>
  );
}

export default App;
