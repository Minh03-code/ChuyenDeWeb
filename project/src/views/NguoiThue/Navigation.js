import React from 'react';
import {
    Link, NavLink
} from "react-router-dom";
class Navigation extends React.Component {
    render() {
        return (
            <>
                <header className="header-area header-sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="main-nav">
                                    <a href="index.html" className="logo">
                                        <img src="assets/images/logo.png" alt="" style={{width: 158 +"px"}}/>
                                    </a>
                                    <ul className="nav">
                                        <li><NavLink to='/nguoithue/quanlyphong' exact="true" className={(navData) => (navData.isActive ? "active" : '')}>Danh Sách Phòng Trọ</NavLink></li>
                                        <li><NavLink to='/nguoithue/goidangdung' className={(navData) => (navData.isActive ? "active" : '')}>Gói Đăng Kí</NavLink></li>
                                        <li><NavLink to='/nguoithue/thongbao' className={(navData) => (navData.isActive ? "active" : '')}>Thông Báo</NavLink></li>
                                        <li><NavLink to='/nguoithue/tinnhan' className={(navData) => (navData.isActive ? "active" : '')}>Tin Nhắn</NavLink></li>
                                        <li><NavLink to='/nguoithue/thongtin' className={(navData) => (navData.isActive ? "active" : '')}>Thông Tin</NavLink></li>
                                        <li><Link to="/chutro/dangxuat">Đăng xuất</Link></li>
                                    </ul>
                                    <a className='menu-trigger'>
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