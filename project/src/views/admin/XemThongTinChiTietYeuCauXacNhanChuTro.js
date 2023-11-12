import React from 'react';
import { baseURL } from "../../services/my-axios";
import { useSearchParams } from "react-router-dom"
import { layThongTinChiTietYeuCauXacThucAPI } from '../../services/admin/MinhService';
import Loading from "../loading/Loading.js";
import { Link } from "react-router-dom";

class QuanLyYeuCauXacNhanChuTro extends React.Component {
    state = {
        detail: [],
        loading: false
    }
    async componentDidMount() {
        const search = window.location.search;
        const param = new URLSearchParams(search);
        console.log(">>>>" + param.get('idChuTro'));
        let res = await layThongTinChiTietYeuCauXacThucAPI(new URLSearchParams(window.location.search).get('idChuTro'));
        if (res != null) {
            console.log(res);
            this.setState({
                detail: res,
                loading: true
            })
        }
    }
    render() {

        let { detail, loading } = this.state;

        return (
            loading == true ?
                <>
                    <div className="main">
                        <main className="content">
                            <div className="manhinhadmin">
                                <img className='img-fluid avt' src={baseURL + detail.chuTro.hinh} alt='anh' />
                                <div className="bg_admin">

                                </div>
                                <div className="thongtin_content">
                                    <p className="title_admin">Thông tin chi tiết</p>
                                    <div className="noidung_content">
                                        <div><b className="labeladmin">Tên:</b> {detail.chuTro.ten}</div>
                                        <div><b className="labeladmin">Số Điện Thoại:</b> {detail.chuTro.soDienThoai}</div>
                                        <div><b className="labeladmin">Căn cước công dân mặt trước:</b></div>
                                        <img src={baseURL+detail.cccdMatTruoc} alt={baseURL+detail.cccdMatTruoc} />
                                        <div><b className="labeladmin">Căn cước công dân mặt sau:</b> </div>
                                        <img src={baseURL+detail.cccdMatSau} alt={baseURL+detail.cccdMatSau} />
                                        {/* <div className="dieuhuong">
                                             <Link className="btn btn-primary bbt">Xác nhận</Link>
                                           
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                        </main>
                    </div>
                </>
                :
                <Loading />
        )
    }
}
export default QuanLyYeuCauXacNhanChuTro;