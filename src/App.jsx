// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login    from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*"         element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
