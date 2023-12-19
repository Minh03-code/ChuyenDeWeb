import React from 'react';
import {
    Link, NavLink
} from "react-router-dom";
class Navigation extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-secondary nav-m">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className='nav-item'>
                                    <NavLink to='/nguoithue/quanlyphong' exact="true" className={(navData) => (navData.isActive ? "active nav-link m" : 'nav-link m')}>Danh Sách Phòng Trọ</NavLink>
                                </li>
                                <li className='nav-item'><NavLink to='/nguoithue/goidangdung' className={(navData) => (navData.isActive ? "nav-link m" : 'nav-link m')}>Gói Đăng Kí</NavLink></li>
                                <li className='nav-item'><NavLink to='/nguoithue/thongbao' className={(navData) => (navData.isActive ? "nav-link m" : 'nav-link m')}>Thông Báo</NavLink></li>
                                <li className='nav-item'><NavLink to='/nguoithue/tinnhan' className={(navData) => (navData.isActive ? "nav-link m" : 'nav-link m')}>Tin Nhắn</NavLink></li>
                                <li className='nav-item'><NavLink to='/nguoithue/thongtin' className={(navData) => (navData.isActive ? "nav-link m" : 'nav-link m')}>Thông Tin</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navigation;