import React from 'react';
import './styleThinh.css';
import { getProfileNguoiThue, updateProfileNguoiThue1, updateProfileNguoiThue2 } from '../../services/nguoithue/ThinhService.js';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

class EditThongTinNguoiThue extends React.Component {
    state = {
        nguoithue: {},
        idTaiKhoan: "",
        ten: "",
        hinh: null,
        soDienThoai: "",

    }
    async componentDidMount() {
        let idTaiKhoanSession = sessionStorage.getItem("accountId");
        let res = await getProfileNguoiThue(idTaiKhoanSession);
        if (res != null) {
            this.setState({
                nguoithue: res,
                idTaiKhoan: idTaiKhoanSession,
                ten: res.ten,
                soDienThoai: res.soDienThoai,

            })
        }
    }

    thayDoiTen(event) {
        this.setState({
            ten: event.target.value
        })

    }
    thayDoiSoDienThoai(event) {
        this.setState({
            soDienThoai: event.target.value
        })
    }

    thayDoiHinh(event) {
        this.setState({
            hinh: event.target.files[0]
        })

    }
    kiemTraHinh() {
        if (this.state.hinh === "") {

        } else {

        }
    }
    kiemTraRong() {
        if (this.state.ten !== "") {
            if (this.state.soDienThoai !== "") {

                this.capNhat()

            } else {
                toast.warning("Không Được Bỏ Trống Số Điện Thoại!");
            }
        }
        else {
            toast.warning("Không Được Bỏ Trống Tên!");
        }

    }
    



    async capNhat() {
        console.log(this.state.hinh);
        if (this.state.hinh != null) {
            let res = await updateProfileNguoiThue1(this.state.idTaiKhoan, this.state.ten, this.state.soDienThoai, this.state.hinh);
            if (res != null) {
                toast.success("Cập Nhật Thông Tin Thành Công!");
            } else {
                toast.error("Cập Nhật Thất Bại!");
            }
        } else {
            let res = await updateProfileNguoiThue2(this.state.idTaiKhoan, this.state.ten, this.state.soDienThoai);
            if (res != null) {
                toast.success("Cập Nhật Thông Tin Thành Công!");
            } else {
                toast.error("Cập Nhật Thất Bại!");
            }
        }

    }

    render() {
        let {ten,hinh,soDienThoai } = this.state;
        //let isObject = Object.keys(nguoithue).length === 0
        return (
            <>
                <div class="page-heading header-text">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <h3>Chỉnh Sửa Thông Tin Người Thuê</h3>
                            </div>
                        </div>
                    </div>
                </div>
               

                  
                       
                        <div className="noidung_content">
                            <form action="#" className="form-control" encType="multipart/form-data" method="post">
                                <div className="mb-3">
                                    <label htmlFor="ten" className="form-label">Tên Của Người Thuê</label>
                                    <input value={ten} onChange={(event) => this.thayDoiTen(event)} type="text" id="ten" name="ten" placeholder="Nhập Tên Của nguoithue Vào Đây..." className="form-control" />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="soDienThoai" className="form-label">Số Điện Thoại</label>
                                    <input value={soDienThoai} onChange={(event) => this.thayDoiSoDienThoai(event)} type="text" id="soDienThoai" name="soDienThoai" placeholder="Nhập Số Điện Thoại Của nguoithue Vào Đây..." className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="hinh" className="form-label">Ảnh nguoithue</label>
                                    <input onChange={(event) => this.thayDoiHinh(event)} type="file" id="hinh" name="hinh" placeholder="Chọn Hình Đại Diện" className="form-control" />
                                </div>
                                <button type="button" className="btn btn-primary bbt" onClick={() => this.kiemTraRong()}>Đồng Ý</button>
                                <NavLink to="/nguoithue/thongtin">
                                    <button type="button" className="btn btn-warning bbt" >Quay lại</button>
                                </NavLink>
                            </form>
                        </div>
                  
               


            </>
        )
    }
}
export default EditThongTinNguoiThue;