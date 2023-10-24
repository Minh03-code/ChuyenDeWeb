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
function App() {
  return (
    <BrowserRouter>
      <div class="wrapper">
        <Navigation />

        <div class="main">
          <nav class="navbar navbar-expand navbar-light navbar-bg">
            <a class="sidebar-toggle js-sidebar-toggle">
              <i class="hamburger align-self-center"></i>
            </a>

            <div class="navbar-collapse collapse">
              <ul class="navbar-nav navbar-align">
                <li class="nav-item dropdown">
                  <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#"
                    data-bs-toggle="dropdown">
                    <i class="align-middle" data-feather="settings"></i>
                  </a>

                  <a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#"
                    data-bs-toggle="dropdown">
                    <img src="img/avatars/avatar.jpg" class="avatar img-fluid rounded me-1"
                      alt="Charles Hall" /> <span class="text-dark">Charles Hall</span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="pages-profile.html">
                      <i class="align-middle me-1" data-feather="user"></i> Profile
                    </a>
                    <a class="dropdown-item" href="#">Log out</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <main class="content">
            <Routes>
              <Route path="/" exact element={<QuanLyChuTro />}>
              </Route>
              <Route path="/quanlygoidangky" element={<QuanLyGoiDangKy />}>
              </Route>
              <Route path="/xacthucchutro" element={<QuanLyYeuCauXacNhanChuTro />}>
              </Route>
              <Route path="/xacthucgoidangky" element={<QuanLyYeuCauXacNhanGoi />}>
              </Route>
              <Route path="/quanlykhuvuc" element={<QuanLyKhuVuc />}>
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
