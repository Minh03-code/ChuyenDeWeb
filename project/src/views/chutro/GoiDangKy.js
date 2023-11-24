import React from 'react';
import chitietanh from "../../images/avt1.jpg"
import { getGoiCallAPI } from "../../services/admin/DungService"
class GoiDangKy extends React.Component {
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
                <h4>Gói Dang Dung Thuê {soLuongPhong} Phòng {thoihan} Tháng</h4>
                <div className='chitietgoidangki'>
                  <div class="card text-bg-primary">
                  <div class="card-header">Header</div>
                    <div class="card-body">
                      This is some text within a card body.
                    </div>
                  </div>
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
export default GoiDangKy;