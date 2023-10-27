import React from 'react';
import './styleNghiem.scss';
import axios from 'axios';
import myAxios from '../../services/my-axios';
import { getProfileAdmin } from '../../services/admin/NghiemService';
class ThongTinTaiKhoan extends React.Component {
    state ={
        admin:{}
    }
    async componentDidMount(){
        let res = getProfileAdmin();
        if (res.data != null) {
            this.setState({
                admin: res.data
            })
        }
    }
    render() {
        let{admin} = this.state;
        let stringAnh = myAxios.baseURL + admin.hinh;
        return (
            <>
                <div className="main">
                    <main className="content">
                    
                    <div className="manhinhadmin">
                   <img className='img-fluid avt' src={stringAnh} />
                   <div className="bg_admin">

                    </div>
                    <div class="thongtin_content">
                <p className="title_admin">Thông Tin Tài Khoản Admin</p>
                <div className="noidung_content">
                    <div><b className="labeladmin">Tên:</b>{admin.ten}</div>
                    <div><b className="labeladmin">Số Điện Thoại:</b> {admin.soDienThoai}</div>
                    <div><b className="labeladmin">Số Tài Khoản Ngân Hàng:</b> {admin.soTaiKhoanNganHang}</div>
                    <div><b className="labeladmin">Tên Chủ Tài Khoản Ngân Hàng:</b> {admin.tenChuTaiKhoan}</div>
                    <div className="dieuhuong">
                        <button type="button" className="btn btn-warning bbt">Sửa Thông Tin</button>
                        <button type="button" className="btn btn-primary bbt">Đổi Mật Khẩu</button>
                        <button type="button" className="btn btn-dark bbt">Đăng Xuất</button>
                        </div>
                        </div>
                        </div>
    
                    </div>
   
                    </main>
                </div>
            </>
        )
    }
}
export default ThongTinTaiKhoan;