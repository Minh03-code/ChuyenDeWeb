import React from 'react';
import { NavLink, useParams } from "react-router-dom";
import { baseURL } from "../../services/my-axios";
import { getAllGoiDangKyCallAPI } from '../../services/admin/ThinhService';
class ListGoiDangKy extends React.Component {
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
          {/* <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="left-image">
                  <img src={chitietanh} alt="" />
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <h4>Gói Cho Thuê 10 Phòng 1 Tháng</h4>


                <div className='chitietgoidangki'>
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
          </div> */}
          <div class="container">
            <div class="row trending-box">
              {
                listGoiDangKy.length == 0 ? <div className='null'>rỗng</div> :
                  <div>
                    {listGoiDangKy && listGoiDangKy.length > 0 && listGoiDangKy.map((item, index) => {
                      return (
                        <div class="col-lg-12 col-md-6 align-self-center mb-30 trending-items col-md-6 ">
                          <div class="item">
                            <div class="down-content">
                            <h4>Gói Cho Thuê {item.soLuongPhongToiDa} Phòng {item.thoiHan} Tháng</h4>
                            <button className='btn btn-primary bbt' >Đăng Ký gói</button>
                            <button className='btn btn-primary bbt' >Nâng cấp gói</button>
                            
                            

                              {/* <span class="category">{item.noiDung}</span>
                              <h4>{item.nguoiGui.ten}</h4> */}
                              {/* <NavLink to={`/chutro/thongbaodetail?id=${item.id}`} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                              </svg></NavLink> */}
                              {/* <a href="product-details.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                                            </svg></a> */}
                            </div>
                           
                          </div>
                         
                        </div>
                        
                      )
                    })
                    }
                  </div>
              }
              {/* <div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                                <div class="item">

                                    <div class="down-content">
                                        <span class="category">Thanh toán thành...</span>
                                        <h4>Admin</h4>
                                        <a href="product-details.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                        </svg></a>
                                    </div>
                                </div>
                            </div> */}

            </div>
          </div>
        </div>

      </>
    )
  }
}
export default ListGoiDangKy;