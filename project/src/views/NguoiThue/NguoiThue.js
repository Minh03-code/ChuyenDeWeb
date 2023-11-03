import React from 'react';
import {
  useNavigate,
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NotFound from "../NotFound/NotFound.js";
function NguoiThue() {
  console.log(sessionStorage.getItem('accountId'));
  return (
    sessionStorage.getItem('accountType') == 0 ?
    <>
      Chủ trọ
    </>
    :<NotFound/>
  );
}

export default NguoiThue;
