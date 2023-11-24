import React from 'react';
import chitietanh from "../../images/avt1.jpg"
import { getGoiCallAPI } from "../../services/admin/DungService"
import { NavLink } from 'react-router-dom';
class GoiDangDung extends React.Component {
  state = {
    thoihan: "",
    soLuongPhong: "",
    gia: "",
  };
  async getThongTin() {
    let goi = await getGoiCallAPI(2);
    console.log(goi);
    if (goi != null) {
      this.setState({
        thoihan: goi.thoiHan,
        soLuongPhong: goi.soLuongPhongToiDa,
        gia: goi.gia,
      })
    }
  }
  async moModal() {
    let modal = document.querySelector(".modal1");
    let formG = document.querySelector(".chitietgoidangki");
    modal.style.display = "block"
    formG.style.display = "none"

  }
  dongModal() {
    let modal = document.querySelector(".modal1");
    let formG = document.querySelector(".chitietgoidangki");
    modal.style.display = "none"
    formG.style.display = "block"
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
                  <NavLink to={`/chutro/goidangky`}><button className='btn btn-primary bbt'>Nâng Cấp Gói</button></NavLink>
                  <button className='btn btn-success bbt' onClick={() => this.moModal()}>Gia Hạn Gói</button>
                  <button className='btn btn-danger bbt'>Huỷ Gói</button>
                </div>
              </div>
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
                      <button type="button" class="col-3 btn btn-outline-info">Dang ki</button>
                    </div>
                  </div>
                  <div class="card container">
                    <div className="row">
                      <div class="card-body col-9">
                        This is some text within a card body.
                      </div>
                      <button type="button" class="col-3 btn btn-outline-info">Dang ki</button>
                    </div>
                  </div>
                  <div class="card container">
                    <div className="row">
                      <div class="card-body col-9">
                        This is some text within a card body.
                      </div>
                      <button type="button" class="col-3 btn btn-outline-info">Dang ki</button>
                    </div>
                  </div>
                  <div class="card container">
                    <div className="row">
                      <div class="card-body col-9">
                        This is some text within a card body.
                      </div>
                      <button type="button" class="col-3 btn btn-outline-info">Dang ki</button>
                    </div>
                  </div>
                  <div class="card container">
                    <div className="row">
                      <div class="card-body col-9">
                        This is some text within a card body.
                      </div>
                      <button type="button" class="col-3 btn btn-outline-info">Dang ki</button>
                    </div>
                  </div>
                  <div class="card container">
                    <div className="row">
                      <div class="card-body col-9">
                        This is some text within a card body.
                      </div>
                      <button type="button" class="col-3 btn btn-outline-info">Dang ki</button>
                    </div>
                  </div>
                  <div class="card container">
                    <div className="row">
                      <div class="card-body col-9">
                        This is some text within a card body.
                      </div>
                      <button type="button" class="col-3 btn btn-outline-info">Dang ki</button>
                    </div>
                  </div>
                  <div class="card container">
                    <div className="row">
                      <div class="card-body col-9">
                        This is some text within a card body.
                      </div>
                      <button type="button" class="col-3 btn btn-outline-info">Dang ki</button>
                    </div>
                  </div>
                  <div class="card container">
                    <div className="row">
                      <div class="card-body col-9">
                        This is some text within a card body.
                      </div>
                      <button type="button" class="col-3 btn btn-outline-info">Dang ki</button>
                    </div>
                  </div>
                  <div class="card container">
                    <div className="row">
                      <div class="card-body col-9">
                        This is some text within a card body.
                      </div>
                      <button type="button" class="col-3 btn btn-outline-info">Dang ki</button>
                    </div>
                  </div>
                  <div class="card container">
                    <div className="row">
                      <div class="card-body col-9">
                        This is some text within a card body.
                      </div>
                      <button type="button" class="col-3 btn btn-outline-info">Dang ki</button>
                    </div>
                  </div>
                  <div class="card container">
                    <div className="row">
                      <div class="card-body col-9">
                        This is some text within a card body.
                      </div>
                      <button type="button" class="col-3 btn btn-outline-info">Dang ki</button>
                    </div>
                  </div>
                  <div class="card container">
                    <div className="row">
                      <div class="card-body col-9">
                        This is some text within a card body.
                      </div>
                      <button type="button" class="col-3 btn btn-outline-info">Dang ki</button>
                    </div>
                  </div>
                  <div class="card container">
                    <div className="row">
                      <div class="card-body col-9">
                        This is some text within a card body.
                      </div>
                      <button type="button" class="col-3 btn btn-outline-info">Dang ki</button>
                    </div>
                  </div>
                  <div class="card container">
                    <div className="row">
                      <div class="card-body col-9">
                        This is some text within a card body.
                      </div>
                      <button type="button" class="col-3 btn btn-outline-info">Dang ki</button>
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