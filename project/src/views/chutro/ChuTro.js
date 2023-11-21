import React from 'react';
import {
  useNavigate,
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import style1 from "../../styles/chutro/assets/css/fontawesome.css";
import style2 from "../../styles/chutro/assets/css/templatemo-lugx-gaming.css";
// import style3 from "../../styles/chutro/assets/css/owl.css";
import style4 from "../../styles/chutro/assets/css/animate.css";
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
function ChuTro() {
  console.log(sessionStorage.getItem('accountId'));
  return (
    sessionStorage.getItem('accountType') == 1 ?
      <>
        <Navigation />
        <Routes>
          <Route path='*'  element={<QuanLyPhong/>}></Route>
          <Route path='/quanlyphong'  element={<QuanLyPhong/>}>
            
          </Route>
          <Route path='/goidangdung' element={<GoiDangDung/>}></Route>
          <Route path='/thongbao' element={<ThongBao/>}></Route>
          <Route path='/thongtin' element={ <ThongTin/>}></Route>
          <Route path='/tinnhan' element={ <TinNhan/>}></Route>
          <Route path='/dangxuat' element={<DangXuat/>}></Route>
          <Route path='/danhsachnguoithue' element={<DanhSachNguoiThueTro/>}></Route>

        </Routes>
        <footer>
    <div className="container">
      <div className="col-lg-12">
        <p>Copyright © 2048 LUGX Gaming Company. All rights reserved. &nbsp;&nbsp; <a rel="nofollow" href="https://templatemo.com" target="_blank">Design: TemplateMo</a></p>
      </div>
    </div>
  </footer>
      </>
      : <NotFound />
  );
}

export default ChuTro;
