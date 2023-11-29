import React from 'react';
import chitietanh from "../../images/avt1.jpg"
import { getGoiCallAPI } from "../../services/admin/DungService"
class GoiDangDung extends React.Component {
  state = {
    thoihan: "",
    soLuongPhong: "",
    gia: "",
  };
  async getThongTin() {
    let idTaiKhoan = sessionStorage.getItem("accountId");
    let goi = await getGoiCallAPI(idTaiKhoan);
    console.log(goi);
    if (goi != null) {
      this.setState({
        thoihan: goi.thoiHan,
        soLuongPhong: goi.soLuongPhongToiDa,
        gia: goi.gia,
      })
    }
  }
  async guiThanhToanGoi(){

  }


  // dong mo giao dien
  moModal() {
    let modal = document.querySelector(".modal1");
    let formG = document.querySelector(".chitietgoidangki");
    modal.style.display = "block"
    formG.style.display = "none"

  }
  dongModal() {
    let modal = document.querySelector(".modal1");
    let formG = document.querySelector(".chitietgoidangki");
    let modal1 = document.querySelector(".modal3");
    modal.style.display = "none"
    formG.style.display = "block"
    modal1.style.display = "none"
  }
  moThanhToan() {
    let modal = document.querySelector(".modal1");
    let modal1 = document.querySelector(".modal3");
    modal.style.display = "none"
    modal1.style.display = "block"

  }


  
  async componentDidMount() {
    this.getThongTin();
  }
  render() {
    let { thoihan, soLuongPhong, gia } = this.state;
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
            <div class="row">
              <div class="col-lg-6">
                <div class="left-image">
                  <img src={chitietanh} alt="" />
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <h4>Gói Cho Thuê {soLuongPhong} Phòng {thoihan} Tháng</h4>

                <div className='chitietgoidangki'>
                  <h2 className='ten_chu_tro'>Chủ Trọ: Nguyễn Gia Nghiêm</h2>
                  <div className='chutro_info'><b>Giá Gói: </b>{gia}</div>
                  <div className='chutro_info'><b>Số Điện Thoại: </b>C111111111111</div>
                  <div className='chutro_info'><b>Số Tài Khoản:</b> 1111111111111</div>
                  <div className='chutro_info'><b>Số Tài Khoản Ngân Hàng:</b> 1111111111111</div>
                  <div className='chutro_info'><b>Tên Người Thụ Hưởng:</b> NGUYEN G IA NGHIEM</div>
<button className='btn btn-primary bbt'>Nâng Cấp Gói</button>
                  <button className='btn btn-success bbt' onClick={() => this.moModal()}>Gia Hạn Gói</button>
                  <button className='btn btn-danger bbt'>Huỷ Gói</button>
                </div>
              </div>

              {/* giao dien list gói */}

              <div className="modal1">
                <div className='modal2 text-end'>
                  <button type="button" class="col align-self-end btn btn-outline-danger" onClick={() => this.dongModal()} aria-label="Close">Cancel</button>
                </div>
                <div className="modal-content1">

                  <div class="card container">
                    <div className="row">
                      <div class="card-body col-9">
                        This is some text within a card body.
                      </div>
                      <button type="button" class="col-3 btn btn-outline-info" onClick={() => this.moThanhToan()}>Dang ki</button>
                    </div>
                  </div>


                </div>

              </div>

              {/* giao dien thanh toan goi */}

              <div className="modal3">
                <div className='modal4 text-end'>
                  <button type="button" class="col align-self-end btn btn-outline-danger" onClick={() => this.dongModal()} aria-label="Close">Cancel</button>
                </div>
                <div className="modal-content2">
                  <div class="container">
                    <div class="row">
                      <div className='chitietgoidangki1 col-md-6 border border-5'>
                        <h2 className='ten_chu_tro'>Chủ Trọ: Nguyễn Gia Nghiêm</h2>
                        <div className='chutro_info'><b>Giá Gói: </b>{gia}</div>
                        <div className='chutro_info'><b>Số Điện Thoại: </b>C111111111111</div>
                        <div className='chutro_info'><b>Số Tài Khoản:</b> 1111111111111</div>
                        <div className='chutro_info'><b>Số Tài Khoản Ngân Hàng:</b> 1111111111111</div>
                        <div className='chutro_info'><b>Tên Người Thụ Hưởng:</b> NGUYEN G IA NGHIEM</div>
                      </div>
                      {/* <div className='col-md-1' /> */}

                      <div className='chitietgoidangki1 col-md-6 border border-5 border border-5'>
                        <h2 className='ten_chu_tro'>Chủ Trọ: Nguyễn Gia Nghiêm</h2>
                        <div className='chutro_info'><b>Giá Gói: </b>{gia}</div>
                        <div className='chutro_info'><b>Số Điện Thoại: </b>C111111111111</div>
                        <div className='chutro_info'><b>Số Tài Khoản:</b> 1111111111111</div>
                        <div className='chutro_info'><b>Số Tài Khoản Ngân Hàng:</b> 1111111111111</div>
                        <div className='chutro_info'><b>Tên Người Thụ Hưởng:</b> NGUYEN G IA NGHIEM</div>
                      </div>

                      <div class="mb-3 col-12">
                        <label for="formFile" class="form-label">Anh</label>
                        <input class="form-control" type="file" id="formFile" />
                      </div>
                      <button type="button" class="btn btn-primary" onClick={() => this.guiThanhToanGoi()}>Primary</button>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </>
    )
  }
}
export default GoiDangDung;