import React from 'react';
import axios from 'axios';
import { baseURL } from "../../services/my-axios";
import { NavLink, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { getDetailThongBaoCallAPI, getChiTietTaiKhoanTheoIdCallAPI } from '../../services/admin/ThinhService';


class ThongBaoDetail extends React.Component {
    state = {
        idTaiKhoan: "",
        hinh: "",
        ten: "",
        noiDung: "",
       
    }


    async componentDidMount() {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const kitu = params.get('id');
        console.log(kitu);

        let resDetailThongBao = await getDetailThongBaoCallAPI(kitu);
        if (resDetailThongBao != null) {
            this.setState({
                idTaiKhoan: resDetailThongBao.idTaiKhoan,
                hinh: resDetailThongBao.hinh,
                ten: resDetailThongBao.ten,
                noiDung: resDetailThongBao.noiDung,
                
            })
        }
        
    }

    render() {
        let { hinh, ten,noiDung} = this.state

        return (
            <>
                <div class="page-heading header-text">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <h3>Thông Báo</h3>
                                <span class="breadcrumb"><a href="#">Chủ Trọ: </a>Nguyễn Gia Nghiêm </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section trending">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="left-image">
                                <img src={baseURL + hinh} alt="" />
                                </div>
                            </div>
                            <div class="col-lg-6 align-self-center">
                                <div className='thongtinthongbao'>

                                <h2 className='ten_chu_tro'>Tên: {ten}</h2>
                                    <div className='chutro_info'><b>Nội dung: </b>{noiDung}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default ThongBaoDetail;