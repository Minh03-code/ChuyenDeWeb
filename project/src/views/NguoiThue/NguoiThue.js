import React from "react";
import {
  useNavigate,
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import NotFound from "../NotFound/NotFound.js";
import Navigation from "./Navigation.js";
import ThongBao from "../NguoiThue/ThongBao.js";
import Footer from "../item/Footer.js";
import ThongBaoDetail from "./ThongBaoDetail.js";
import TinNhanRealTime from "./TinNhanRealTime.js";
import DanhSachPhongGoiY from "./DanhSachPhongGoiY.js";
import ThongTinChuTro from "./ThongTin.js";
import Home from "./Home.js";
import "./styles/nguoithue.css";
import FooterNguoiThue from "../item/FooterNguoiThue.js";

function NguoiThue() {
  console.log(sessionStorage.getItem("accountId"));
  return sessionStorage.getItem("accountType") == 0 ? (
    <>
      <div className="wts">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/thongbao" element={<ThongBao />}></Route>
          <Route path="/thongbaodetail" element={<ThongBaoDetail />}></Route>
          <Route path="/tinnhan" element={<TinNhanRealTime />}></Route>
          <Route
            path="/danhsachphonggoiy"
            element={<DanhSachPhongGoiY />}
          ></Route>

          <Route path="/thongtin" element={<ThongTinChuTro />}></Route>
        </Routes>
        <FooterNguoiThue/>
      </div>
    </>
  ) : (
    <NotFound />
  );
}

export default NguoiThue;
