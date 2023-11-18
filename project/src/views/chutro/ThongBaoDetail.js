import React from 'react';
import axios from 'axios';
import { baseURL } from "../../services/my-axios";
import { NavLink, useParams } from "react-router-dom";
import {getDetailThongBaoCallAPI} from '../../services/admin/ThinhService';


class ThongBaoDetail extends React.Component {
    state = {
        id: "",
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
                noiDung: resDetailThongBao.noiDung,
                trangThai: resDetailThongBao.trangThai
            })
        }
        console.log(resDetailThongBao);
    }
   
    render() {
        let { id, noiDung, trangThai } = this.state
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
                        <div class="row trending-box">
                            {
                                <div class="col-lg-12 col-md-6 align-self-center mb-30 trending-items col-md-6">
                                <div class="item">
                                    <div class="down-content">
                                        <h3>Nội dung</h3>
                                        <span class="category">{noiDung}</span>
                                        {/* <span class="category">{nguoiGui.ten}</span> */}
                                       
                                    </div>
                                </div>
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
export default ThongBaoDetail;