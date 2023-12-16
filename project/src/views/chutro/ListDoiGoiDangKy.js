import React from 'react';
import { getAllDoiGoiDangKyCallAPI } from '../../services/admin/ThinhService';
class ListDoiGoiDangKy extends React.Component {
  state = {
    listDoiGoiDangKy: []
  }
  hideLoader = () => console.log(1);;
  async componentDidMount() {
    let res = await getAllDoiGoiDangKyCallAPI();
    if (res != null) {
      this.setState({
        listDoiGoiDangKy: res
      })
    }
    console.log(res);
  }
  render() {
    let { listDoiGoiDangKy } = this.state
    return (
      <>
        <div class="page-heading header-text">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h3>Danh Sách Đổi Gói Đăng Kí</h3>
                <span class="breadcrumb"><a href="#">Chủ Trọ: </a>Nguyễn Gia Nghiêm </span>
              </div>
            </div>
          </div>
        </div>
        <div class="single-product section">
          <div class="container">
            <div class="row trending-box">
              {
                listDoiGoiDangKy.length == 0 ? <div className='null'>rỗng</div> :
                  <div>
                    {listDoiGoiDangKy && listDoiGoiDangKy.length > 0 && listDoiGoiDangKy.map((item, index) => {
                      return (
                        <div class="col-lg-12 col-md-6 align-self-center mb-30 trending-items col-md-6 ">
                          <div class="item">
                            <div class="down-content">
                            <h4>Gói Cho Thuê {item.soLuongPhongToiDa} Phòng {item.thoiHan} Tháng</h4>
                            <button className='btn btn-primary bbt' >Đăng Ký gói</button>
                            </div>
                           
                          </div>
                         
                        </div>
                        
                      )
                    })
                    }
                  </div>
              }
            </div>
          </div>
        </div>

      </>
    )
  }
}
export default ListDoiGoiDangKy;