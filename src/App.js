import './App.css';
import Home from './pages/Home';
import {HashRouter as Router , Routes, Route} from 'react-router-dom';
import Form from './pages/Form';
import Blog from './pages/Blog';
import Login from './pages/Login';
import PatchNotes from './pages/PatchNotes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/form" element={<Form/>} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="/blog" element={<Blog/>} /> 
        <Route path="/patchnotes" element={<PatchNotes/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
