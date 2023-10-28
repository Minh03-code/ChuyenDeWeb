import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoginRegister from './loginregister/FormLR.js';
import Admin from './admin/Admin.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegister />}>
        </Route>
        <Route path="/admin/*" element={<Admin />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;