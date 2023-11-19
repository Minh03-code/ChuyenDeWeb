import React from 'react';
import axios from 'axios';
import { baseURL } from "../../services/my-axios";
import { NavLink, useParams } from "react-router-dom";
import avt from "../../images/avt1.jpg";
import { getDetailThongBaoCallAPI } from '../../services/admin/ThinhService';


class ThongBaoDetail extends React.Component {
    state = {
        id: "",
        ten: "",
        noiDung: "",
        trangThai: ""
    }
    async componentDidMount() {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const kitu = params.get('id');
        console.log(kitu);

        let resDetailThongBao = await getDetailThongBaoCallAPI(kitu);
        if (resDetailThongBao != null) {
            this.setState({
                id: resDetailThongBao.id,
                ten: resDetailThongBao.ten,
                noiDung: resDetailThongBao.noiDung,
                trangThai: resDetailThongBao.trangThai
            })
        }
        console.log(resDetailThongBao);
    }
    state = {
        listThongBaoById: []
    }


    render() {
        let { id, ten, noiDung, trangThai } = this.state

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
                                    <img src={avt} alt="" />
                                </div>
                            </div>
                            <div class="col-lg-6 align-self-center">
                                <div className='thongtinthongbao'>
                                    <h2 className='ten'>Tên: {ten}</h2>
                                    <div className='chutro_info'><b>Nội dung: </b> {noiDung}</div>
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