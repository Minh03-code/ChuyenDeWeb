import React from 'react';
class ThongTinTaiKhoan extends React.Component {
    render() {
        return (
            <>
                <div className="main">
                    <main className="content">
                        <div className="d-grid gap-2">

                        <a type="button" class="btn btn-secondary">Xem thông tin tài khoản</a>
                        <a type="button" class="btn btn-secondary">Đổi mật khẩu</a>
                        <a type="button" class="btn btn-secondary">Đăng xuất</a>


                        </div>
                    </main>
                </div>
            </>
        )
    }
}
export default ThongTinTaiKhoan;