import React, { Fragment } from 'react';
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
function Admin() {
    return (


        <>
            <div class="wrapper">
                <Navigation />

                <div class="main">

                    <main class="content">
                        <Routes>
                            <Route path="quanlychutro" element={<QuanLyChuTro />}>
                            </Route>
                            <Route path="quanlygoidangky" element={<QuanLyGoiDangKy />}>
                            </Route>
                            <Route path="xacthucchutro" element={<QuanLyYeuCauXacNhanChuTro />}>
                            </Route>
                            <Route path="/admin/xacthucgoidangky" Component={<QuanLyYeuCauXacNhanGoi />}>
                            </Route>
                            <Route path="/admin/quanlykhuvuc" Component={<QuanLyKhuVuc />}>
                            </Route>
                            <Route path="/admin/quanlybanner" Component={<QuanLyBanner />}>
                            </Route>
                            <Route path="/admin/thongtintaikhoan" Component={<ThongTinTaiKhoan />}>
                            </Route>
                        </Routes>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Admin;
