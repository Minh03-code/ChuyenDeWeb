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
import "../../styles/global.css";
// import style5 from "https://unpkg.com/swiper@7/swiper-bundle.min.css";
import style6 from "../../styles/chutro/vendor/bootstrap/css/bootstrap.min.css";
import Navigation from "./Navigation.js";
import Footer from "../item/Footer";
import NotFound from "../NotFound/NotFound.js";
import TinNhanRealTime from './TinNhanRealTime.js';
import DanhSachPhongGoiY from './DanhSachPhongGoiY.js';
function NguoiThue() {
  console.log(sessionStorage.getItem('accountId'));
  return sessionStorage.getItem('accountType') == 0 ?(
    
    <>
       <Navigation />
      <Routes>
        <Route path="/*" element={<TinNhanRealTime/>}></Route>
        <Route path="/danhsachphonggoiy" element={<DanhSachPhongGoiY/>}></Route>
      </Routes>
      <Footer
        title={"Thông tin liên hệ"}
        name={"Nguyễn Đức Minh"}
        phoneNumber={"0123456789"}
        email={"minh123@gmail.com"}
      />
    </>
    
  ): (
    <NotFound />
  );
}

export default NguoiThue;
