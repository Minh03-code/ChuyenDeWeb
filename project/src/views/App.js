import React from 'react';
import Navigation from './admin/Navigation.js';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import QuanLyChuTro from './admin/QuanLyChuTro.js';
import QuanLyGoiDangKy from './admin/QuanLyGoiDangKy.js';
import QuanLyYeuCauXacNhanChuTro from './admin/QuanLyYeuCauXacNhanChuTro.js';
import QuanLyKhuVuc from './admin/QuanLyKhuVuc.js';
import ThongTinTaiKhoan from './admin/ThongTinTaiKhoan.js';
import QuanLyYeuCauXacNhanGoi from './admin/QuanLyYeuCauXacNhanGoi.js';
import QuanLyBanner from './admin/QuanLyBanner.js';
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
