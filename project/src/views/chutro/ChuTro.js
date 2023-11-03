import React from 'react';
import {
  useNavigate,
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NotFound from "../NotFound/NotFound.js";
function ChuTro() {
  console.log(sessionStorage.getItem('accountId'));
  return (
    sessionStorage.getItem('accountType') == 1 ?
    <>
      Chủ trọ
    </>
    :<NotFound/>
  );
}

export default ChuTro;
