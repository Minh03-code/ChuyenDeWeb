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
function ChuTro() {
  console.log(sessionStorage.getItem('accountId'));
  return (
    sessionStorage.getItem('accountType') == 1 ?
      <>
        <Navigation />
        <div class="page-heading header-text">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h3>Our Shop</h3>
                <span class="breadcrumb"><a href="#">Home</a> Our Shop</span>
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path='/quanlyphong' exact element={<QuanLyPhong/>}>
            
          </Route>
          <Route path='/goidangdung' element={<GoiDangDung/>}></Route>
          <Route path='/thongbao' element={<ThongBao/>}></Route>
          <Route path='/thongtin' element={ <ThongTin/>}></Route>
          <Route path='/dangxuat' element={<DangXuat/>}></Route>
        </Routes>
      </>
      : <NotFound />
  );
}

export default ChuTro;
