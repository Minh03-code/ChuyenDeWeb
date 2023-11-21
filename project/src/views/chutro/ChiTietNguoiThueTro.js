import React from 'react';
import axios from 'axios';
import { baseURL } from "../../services/my-axios";
import { NavLink, useParams } from "react-router-dom";
import { getChiTietnguoiThueCallAPI } from '../../services/admin/KietService'
class ChiTietNguoiThueTro extends React.Component {
    state = {
        hinh: "",
        ten: "",
        soDienThoai: "",
        gioiTinh: ""
    }
    async componentDidMount() {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const kitu = params.get('id');
        console.log(kitu);

        let res = await getChiTietnguoiThueCallAPI(kitu);
        if (res != null) {
            this.setState({
                hinh: res.hinh,
                ten: res.ten,
                soDienThoai: res.soDienThoai,
                gioiTinh: res.gioiTinh
            })
        }
        console.log(res);
    }
    render() {
        let { hinh, ten, soDienThoai, gioiTinh } = this.state
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
                                    <img src={baseURL + hinh} alt="" />
                                </div>
                            </div>
                            <div class="col-lg-6 align-self-center">
                                <div className='thongtinchutro'>
                                    <h2 className='ten_chu_tro'>{ten}</h2>
                                    <div className='chutro_info'>{soDienThoai}</div>
                                    <div className='chutro_info'>{gioiTinh == 1 ? <>Nam</> : <>Nữ</>}</div>
                                    <NavLink to={`/chutro/danhsachnguoithue`} ><button className='btn btn-primary bbt'>Quay lại</button></NavLink>

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
export default ChiTietNguoiThueTro;