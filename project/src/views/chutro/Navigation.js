import React from 'react';
import {
    Link, NavLink
} from "react-router-dom";
class Navigation extends React.Component {
    render() {
        return (
            <>
                <header class="header-area header-sticky">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <nav class="main-nav">
                                    <a href="index.html" class="logo">
                                        <img src="assets/images/logo.png" alt="" style={{width: 158 +"px"}}/>
                                    </a>
                                    <ul class="nav">
                                        <li><NavLink to='/chutro/quanlyphong' className={(navData) => (navData.isActive ? "active" : '')}>Quản lý phòng trọ</NavLink></li>
                                        <li><NavLink to='/chutro/goidangdung' className={(navData) => (navData.isActive ? "active" : '')}>Gói đang dùng</NavLink></li>
                                        <li><NavLink to='/chutro/thongbao' className={(navData) => (navData.isActive ? "active" : '')}>Thông báo</NavLink></li>
                                        <li><NavLink to='/chutro/thongtin' className={(navData) => (navData.isActive ? "active" : '')}>Thông tin</NavLink></li>
                                       
                                        <li><Link to="/chutro/dangxuat">Đăng xuất</Link></li>
                                    </ul>
                                    <a class='menu-trigger'>
                                        <span>Menu</span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default Navigation;