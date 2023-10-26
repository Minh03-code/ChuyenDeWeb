import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './styles/global.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import Admin from './views/admin/Admin';
import LoginRegister from './views/loginregister/FormLR';
import QuanLyChuTro from './views/admin/QuanLyChuTro';
import QuanLyGoiDangKy from './views/admin/QuanLyGoiDangKy';
import QuanLyYeuCauXacNhanChuTro from './views/admin/QuanLyYeuCauXacNhanChuTro';
import QuanLyYeuCauXacNhanGoi from './views/admin/QuanLyYeuCauXacNhanGoi';
import QuanLyKhuVuc from './views/admin/QuanLyKhuVuc';
import QuanLyBanner from './views/admin/QuanLyBanner';
import ThongTinTaiKhoan from './views/admin/ThongTinTaiKhoan';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
