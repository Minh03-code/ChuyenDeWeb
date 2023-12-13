import React from 'react';
import {
  useNavigate,
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NotFound from "../NotFound/NotFound.js";
import Navigation from "./Navigation.js";
import ThongBao from '../NguoiThue/ThongBao.js';
import Footer from '../item/Footer.js';
import ThongBaoDetail from './ThongBaoDetail.js';

function NguoiThue() {
  console.log(sessionStorage.getItem('accountId'));
  return (
    sessionStorage.getItem('accountType') == 0 ?
      <>
        <Navigation />
        <Routes>
          <Route path="/thongbao" element={<ThongBao />}></Route>
          <Route path="/thongbaodetail" element={<ThongBaoDetail />}></Route>

        </Routes>

        <Footer
          title={"Thông tin liên hệ"}
          name={"Nguyễn Đức Minh"}
          phoneNumber={"0123456789"}
          email={"minh123@gmail.com"}
        />
      </>
      : <NotFound />
  );
}

export default NguoiThue;
