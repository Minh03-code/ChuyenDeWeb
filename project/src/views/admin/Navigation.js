import React from "react";
import "../../styles/admin.css";
class Navigation extends React.Component {
    render() {
        return (
            <>
                <nav id="sidebar" class="sidebar js-sidebar">
                    <div class="sidebar-content js-simplebar">
                        <a class="sidebar-brand" href="#">
                            <span class="align-middle">Admin</span>
                        </a>

                        <ul class="sidebar-nav">
                            <li class="sidebar-header">
                                Pages
                            </li>

                            <li class="sidebar-item active">
                                <a class="sidebar-link" href="#">
                                    <span class="align-middle">Quản lí chủ trọ</span>
                                </a>
                            </li>
                            <li class="sidebar-item">
                                <a class="sidebar-link" href="#">
                                    <span class="align-middle">Quản lí gói đăng ký</span>
                                </a>
                            </li>
                            <li class="sidebar-item">
                                <a class="sidebar-link" href="#">
                                    <span class="align-middle">Quản lí yêu cầu</span>
                                </a>
                            </li>
                            <a class="sidebar-link" href="#">
                                <span class="align-middle">Quản lí hình ảnh</span>
                            </a>
                            <li class="sidebar-item">
                                <a class="sidebar-link" href="#">
                                    <span class="align-middle">Thông tin tài khoản</span>
                                </a>
                            </li>
                        </ul>


                    </div>
                </nav>
            </>
        )
    }
}
export default Navigation;