import React from 'react';
import Navigation from './Navigation.js';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import QuanLyChuTro from './QuanLyChuTro.js';
import QuanLyGoiDangKy from './QuanLyGoiDangKy.js';
import QuanLyYeuCauXacNhanChuTro from './QuanLyYeuCauXacNhanChuTro.js';
import QuanLyKhuVuc from './QuanLyKhuVuc.js';
import ThongTinTaiKhoan from './ThongTinTaiKhoan.js';
import QuanLyYeuCauXacNhanGoi from './QuanLyYeuCauXacNhanGoi.js';
import QuanLyBanner from './QuanLyBanner.js';
import QuanLyTienIch from './QuanLyTienIch.js';
import ListPhuong from './ListPhuong.js';
import ThemTienIch from './ThemTienIch.js';
import AddKhuVuc from './AddKhuVuc.js';
function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navigation />

        <div className="main">

          <main className="content">
            <Routes>
              <Route path="/" exact element={<QuanLyChuTro />}>
              </Route>
              <Route path="/quanlygoidangky" element={<QuanLyGoiDangKy />}>
              </Route>

              <Route path="/quanlytienich" element={<QuanLyTienIch />}>
              </Route>
              <Route path="/ThemTienIch" element={<ThemTienIch />}>
              </Route>

              <Route path="/xacthucchutro" element={<QuanLyYeuCauXacNhanChuTro />}>
              </Route>
              <Route path="/xacthucgoidangky" element={<QuanLyYeuCauXacNhanGoi />}>
              </Route>
              <Route path="/quanlykhuvuc" element={<QuanLyKhuVuc />}>
              </Route>
              <Route path="/addKhuVuc" element={<AddKhuVuc/>}>
              </Route>
              <Route path="/listPhuong" element={<ListPhuong/>}>
              </Route>
              <Route path="/quanlybanner" element={<QuanLyBanner />}>
              </Route>
              <Route path="/thongtintaikhoan" element={<ThongTinTaiKhoan />}>
              </Route>
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
