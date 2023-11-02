import React from 'react';
import './styleNghiem.css';
import { baseURL } from '../../services/my-axios.js';
import { getProfileAdmin } from '../../services/admin/NghiemService.js';
import { NavLink } from 'react-router-dom';
class ThongTinTaiKhoan extends React.Component {
    state ={
        admin:{}
    }
    async componentDidMount(){
        let res = await getProfileAdmin(1);
        if (res != null) {
            this.setState({
                admin: res
            })
        }
    }
    dieuHuong(){
        
    }
    render() {
        let{admin} = this.state;
        let stringAnh = baseURL + admin.hinh;
        return (
            <>
                <div className="main">
                    <main className="content">
                    <div className="manhinhadmin">
                   <img className='img-fluid avt' src={stringAnh} alt='anh'/>
                   <div className="bg_admin">

                    </div>
                    <div className="thongtin_content">
                    <p className="title_admin">Thông Tin Tài Khoản Admin</p>
                    <div className="noidung_content">
                    <div><b className="labeladmin">Tên:</b> {admin.ten}</div>
                    <div><b className="labeladmin">Số Điện Thoại:</b> {admin.soDienThoai}</div>
                    <div><b className="labeladmin">Số Tài Khoản Ngân Hàng:</b> {admin.soTaiKhoanNganHang}</div>
                    <div><b className="labeladmin">Tên Chủ Tài Khoản Ngân Hàng:</b> {admin.tenChuTaiKhoan}</div>
                    <div className="dieuhuong">
                    <button type="button" className="btn btn-primary bbt" >Sửa Thông Tin</button>
                        <NavLink to={`/editpassword/id=${admin.id}`}><button type="button" className="btn btn-warning bbt">Đổi Mật Khẩu</button></NavLink>
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