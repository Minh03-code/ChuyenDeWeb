import React from 'react';
import avt from "../../images/avt1.jpg";
class ThongTin extends React.Component {
    render() {
        return (
            <>
             <div class="page-heading header-text">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h3>Thông Tin</h3>
                <span class="breadcrumb"><a href="#">Chủ Trọ: </a>Nguyễn Gia Nghiêm </span>
              </div>
            </div>
          </div>
        </div>
        <div class="single-product section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="left-image">
            <img src={avt} alt=""/>
          </div>
        </div>
        <div class="col-lg-6 align-self-center">
          <div className='thongtinchutro'>
            <h2 className='ten_chu_tro'>Nguyễn Gia Nghiêm</h2>
            <div className='chutro_info'><b>Trạng Thái: </b> Chưa Xác Thực</div>
            <div className='chutro_info'><b>Số Điện Thoại: </b>C111111111111</div>
            <div className='chutro_info'><b>Số Tài Khoản:</b> 1111111111111</div>
            <div className='chutro_info'><b>Số Tài Khoản Ngân Hàng:</b> 1111111111111</div>
            <div className='chutro_info'><b>Tên Người Thụ Hưởng:</b> NGUYEN GIA NGHIEM</div>
            <button className='btn btn-primary bbt'>Chỉnh Sửa</button>
            <button className='btn btn-warning bbt'>Đổi Mật Khẩu</button>
            <button className='btn btn-success bbt'>Xác Thực</button>
            <button className='btn btn-danger bbt'>Đăng Xuất</button>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="sep"></div>
        </div>
      </div>
    </div>
  </div>
            </>
        )
    }
}
export default ThongTin;