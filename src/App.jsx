import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router';

import Layout from "./components/Layout.jsx";

import Welcome from "./components/pages/Welcome.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import Register from './components/pages/Register.jsx';
import Login from './components/pages/Login.jsx';

import NotFound from "./components/pages/NotFound.jsx";

/* Configuring routes
  Rendering <Routes> and <Route> that couple URL segments to UI elements
*/
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/heatmap" element={<h1>Potentially</h1>} />
          <Route path="/recipes" element={<h1>Recipes soon.</h1>} />
          <Route path="/resources" element={<h1>One day resources.</h1>} />
          <Route path="/contact" element={<h1>Contact us!</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
