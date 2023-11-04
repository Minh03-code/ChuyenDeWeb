import React from "react";
import Navigation from "./Navigation.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import QuanLyChuTro from "./QuanLyChuTro.js";
import QuanLyGoiDangKy from "./QuanLyGoiDangKy.js";
import QuanLyYeuCauXacNhanChuTro from "./QuanLyYeuCauXacNhanChuTro.js";
import QuanLyKhuVuc from "./QuanLyKhuVuc.js";
import ThongTinTaiKhoan from "./ThongTinTaiKhoan.js";
import QuanLyYeuCauXacNhanGoi from "./QuanLyYeuCauXacNhanGoi.js";
import QuanLyBanner from "./QuanLyBanner.js";
import QuanLyTienIch from "./QuanLyTienIch.js";
import EditBanner from "./EditBanner.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navigation />

        <div className="main">
          <main className="content">
            <Routes>
              <Route path="/" exact element={<QuanLyChuTro />}></Route>
              <Route
                path="/quanlygoidangky"
                element={<QuanLyGoiDangKy />}
              ></Route>
              <Route path="/quanlytienich" element={<QuanLyTienIch />}></Route>
              <Route
                path="/xacthucchutro"
                element={<QuanLyYeuCauXacNhanChuTro />}
              ></Route>
              <Route
                path="/xacthucgoidangky"
                element={<QuanLyYeuCauXacNhanGoi />}
              ></Route>
              <Route path="/quanlykhuvuc" element={<QuanLyKhuVuc />}></Route>
              <Route path="/quanlybanner" element={<QuanLyBanner />}></Route>
              <Route
                path="/thongtintaikhoan"
                element={<ThongTinTaiKhoan />}
              ></Route>
              <Route path="/editbanner/:id" element={<EditBanner />}></Route>
            </Routes>
            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
