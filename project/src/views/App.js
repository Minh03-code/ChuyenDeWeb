import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoginRegister from './loginregister/FormLR.js';
import Admin from './admin/Admin.js';
import ChuTro from './chutro/ChuTro.js';
// import NguoiThue from './nguoithue/NguoiThue.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegister />}>
        </Route>
        <Route path="/admin/*" element={<Admin />}>
        </Route>
        <Route path="/chutro/*" element={<ChuTro />}>
        </Route>
        {/* <Route path="/nguoithue/*" element={<NguoiThue />}>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;