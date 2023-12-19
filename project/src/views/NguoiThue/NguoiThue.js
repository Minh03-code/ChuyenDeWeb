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
import EditThongTinNguoiThue from "./EditThongTinNguoiThue.js";
import EditPassWordNguoiThue from "./EditPassWordNguoiThue.js";

function NguoiThue() {
  console.log(sessionStorage.getItem("accountId"));
  return sessionStorage.getItem("accountType") == 0 ? (
    <>
      <Navigation />
      <Routes>
        <Route path="/thongbao" element={<ThongBao />}></Route>
        <Route path="/thongbaodetail" element={<ThongBaoDetail />}></Route>
        <Route path="/*" element={<TinNhanRealTime />}></Route>
        <Route path="/danhsachphonggoiy" element={<DanhSachPhongGoiY />}></Route>

        <Route path="/editthongtinnguoithue/:id" element={<EditThongTinNguoiThue />}></Route>
        <Route path="/editpasswordnguoithue" element={<EditPassWordNguoiThue />}></Route>

        <Route path="/thongtin" element={<ThongTinChuTro />}></Route>
      </Routes>

      <Footer
        title={"Thông tin liên hệ"}
        name={"Nguyễn Đức Minh"}
        phoneNumber={"0123456789"}
        email={"minh123@gmail.com"}
      />
    </>
  ) : (
    <NotFound />
  );
}

export default NguoiThue;
