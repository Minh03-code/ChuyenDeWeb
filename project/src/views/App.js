import React, { useEffect, useState }  from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoginRegister from './loginregister/FormLR.js';
import Admin from './admin/Admin.js';
import ChuTro from './chutro/ChuTro.js';
import NguoiThue from './NguoiThue/NguoiThue.js';//
import firebase from '../firebase/firebase.js';
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegister />}>
        </Route>
        <Route path="/admin/*" element={<Admin />}>
        </Route>
        <Route path="/chutro/*" element={<ChuTro />}>
        </Route>
        <Route path="/nguoithue/*" element={<NguoiThue />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;