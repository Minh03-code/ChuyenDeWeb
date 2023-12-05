import React, { useState, useEffect } from 'react';
import {
  useNavigate,
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import style1 from "../../styles/chutro/assets/css/fontawesome.css";
import style2 from "../../styles/chutro/assets/css/templatemo-lugx-gaming.css";
// import style3 from "../../styles/chutro/assets/css/owl.css";
import style4 from "../../styles/chutro/assets/css/animate.css";
import "../../styles/global.css";
// import style5 from "https://unpkg.com/swiper@7/swiper-bundle.min.css";
import style6 from "../../styles/chutro/vendor/bootstrap/css/bootstrap.min.css";
import Navigation from './Navigation.js';
import NotFound from "../NotFound/NotFound.js";
import QuanLyPhong from './QuanLyPhong';
import GoiDangDung from './GoiDangDung';
import ThongBao from './ThongBao';
import ThongTin from './ThongTin';
import DangXuat from './DangXuat';
import TinNhan from './TinNhan.js';
import DanhSachNguoiThueTro from './DanhSachNguoiThueTro.js';
import ChiTietNguoiThueTro from './ChiTietNguoiThueTro.js';
import AddRoom from './AddRoom';
import ThongBaoDetail from './ThongBaoDetail.js';
import ListGoiDangKy from './ListGoiDangKy.js';
import { getProfileChuTro } from "../../services/admin/NghiemService.js"
import Footer from '../item/Footer';
function ChuTro() {
  return (
    sessionStorage.getItem('accountType') == 1 ?
      <>
        <Navigation />
        <Routes>
          <Route path='*' element={<QuanLyPhong />}></Route>
          <Route path='/quanlyphong' element={<QuanLyPhong />}>

          </Route>
          <Route path='/goidangdung' element={<GoiDangDung />}></Route>
          <Route path='/thongbao' element={<ThongBao />}></Route>
          <Route path='/thongtin' element={<ThongTin />}></Route>
          <Route path='/tinnhan' element={<TinNhan />}></Route>
          <Route path='/dangxuat' element={<DangXuat />}></Route>
          <Route path='/danhsachnguoithue' element={<DanhSachNguoiThueTro />}></Route>
          <Route path='/chitietnguoithue' element={<ChiTietNguoiThueTro />}></Route>
          <Route path='/themphong' element={<AddRoom />}></Route>
          <Route path='/ListGoiDangKy' element={<ListGoiDangKy />}></Route>
          <Route path='/thongbaodetail' element={<ThongBaoDetail />}></Route>
        </Routes>
        <Footer
          title={"Thông tin liên hệ"}
          name={"Nguyễn Đức Minh"}
          phoneNumber={"0123456789"}
          email={"minh123@gmail.com"} />
      </>
      : <NotFound />
  );
}

export default ChuTro;
