import React from 'react';
import { baseURL } from "../../services/my-axios";
import { getAllGoiDangKyCallAPI } from '../../services/admin/ThinhService';

class GoiDangDung extends React.Component {
  state = {
    listGoiDangKy: []
  }
  hideLoader = () => console.log(1);;
  async componentDidMount() {
    let res = await getAllGoiDangKyCallAPI();
    if (res != null) {
      this.setState({
        listGoiDangKy: res
      })
    }
    console.log(res);
  }
  render() {
    let { listGoiDangKy } = this.state
    return (
      <>
        <div class="page-heading header-text">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h3>Thông Tin Gói Đăng Kí</h3>
                <span class="breadcrumb"><a href="#">Chủ Trọ: </a>Nguyễn Gia Nghiêm </span>
              </div>
            </div>
          </div>
        </div>
        <div class="single-product section">
          <div class="container">
            <div class="col-lg-6 align-self-center">
              {
                listGoiDangKy.length == 0 ? <div className='null'>rỗng</div> :
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="d-none d-xl-table-cell">Số lượng phòng tối đa</th>
                        <th className="d-none d-xl-table-cell">Thời hạn thuê</th>
                        <th className="d-none d-xl-table-cell">Giá thuê</th>
                        <th className="d-none d-xl-table-cell">Hình</th>
                        <th className="d-none d-xl-table-cell">Tên chủ trọ</th>
                        <th className="d-none d-xl-table-cell">Số điện thoại</th>
                        <th className="d-none d-xl-table-cell">Số tài khoản</th>
                        <th className="d-none d-xl-table-cell">Tên người thụ hưởng</th>
                        <th className="d-none d-xl-table-cell">Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody>

                      {
                        listGoiDangKy && listGoiDangKy.length > 0 && listGoiDangKy.map((item, index) => {
                          return (
                            <tr>
                              <td>{item.goi.soLuongPhongToiDa	}</td>
                              <td>{item.goi.thoiHan}</td>
                              <td>{item.goi.gia}</td>
                              <td>{item.chuTro.hinh}</td>
                              <td>{item.chuTro.ten}</td>
                              <td className="d-none d-xl-table-cell">{item.chuTro.soDienThoai}</td>
                              <td className="d-none d-xl-table-cell">{item.chuTro.soTaiKhoanNganHang}</td>
                              <td className="d-none d-xl-table-cell">{item.chuTro.tenChuTaiKhoanNganHang}</td>
                              <td>
                                {item.trangThai == 1 ? <div className='txt_red'>Đã khóa</div> : <div className='txt_green'>Đang hoạt động</div>}
                              </td>
                              <td className="d-none d-md-table-cell">
                                <button className='btn btn-primary bbt'>Đăng Ký gói</button>
                                {/* <button className='btn btn-warning bbt'>Đổi Mật Khẩu</button>
                                <button className='btn btn-success bbt'>Xác Thực</button> */}
                              </td>
                            </tr>
                          )
                        })
                      }

                    </tbody>
                  </table>
              }
            </div>
          </div>
        </div>
        {/* </div> */}

      </>
    )
  }
}
export default GoiDangDung;