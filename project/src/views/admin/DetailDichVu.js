import React from 'react';
import './styleKiet.css';
import { NavLink, useParams } from "react-router-dom";
import { baseURL } from "../../services/my-axios";
import { getDetailServiceCallAPI } from '../../services/admin/KietService';

function LayId() {
    let { id } = useParams("id");
    return id;
}

class DetailDichVu extends React.Component {
    state = {
        id: "",
        thoiHan: "",
        soLuongPhongToiDa: "",
        gia: "",
        trangThai: ""
    }
    async componentDidMount() {
        let resDetailService = await getDetailServiceCallAPI(<LayId />);
        if (resDetailService != null) {
            this.setState({
                id: resDetailService.id,
                thoiHan: resDetailService.thoiHan,
                soLuongPhongToiDa: resDetailService.soLuongPhongToiDa,
                gia: resDetailService.gia,
                trangThai: resDetailService.trangThai
            })
        }
        console.log(resDetailService);
    }

    render() {
        let { id, thoiHan, soLuongPhongToiDa, gia, trangThai } = this.state

        return (
            <>

                <div className="main">
                    <main className="content">
                        <div className="container-fluid p-0">


                            <div className="card flex-fill">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5 className="card-title mb-0">Chi Tiết dịch vụ</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5 className="card-title mb-0">{id}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5 className="card-title mb-0">{thoiHan}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5 className="card-title mb-0">{soLuongPhongToiDa}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5 className="card-title mb-0">{gia}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </main>
                </div>
            </>
        )
    }
}

export default DetailDichVu