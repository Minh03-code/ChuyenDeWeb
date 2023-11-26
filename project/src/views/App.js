import React, { useEffect, useState } from 'react';
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
import DangKiTaiKhoanChuTro from './loginregister/DangKiTaiKhoanChuTro.js';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from '../firebase/firebase.js';
import { getDatabase, ref, onValue } from "firebase/database";
function App() {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const db = getDatabase();
    const starCountRef = ref(db, 'login');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
    });
  };
  useEffect(() => {

    fetchData();

  }, []);

  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<LoginRegister />}>
        </Route>
        <Route path="/dangkitaikhoanchutro" element={<DangKiTaiKhoanChuTro />}>
        </Route>
        <Route path="/admin/*" element={<Admin />}>
        </Route>
        <Route path="/chutro/*" element={<ChuTro />}>
        </Route>
        <Route path="/nguoithue/*" element={<NguoiThue />}>
        </Route>
      </Routes>

    </BrowserRouter>
   
  </>
  );
}

export default App;