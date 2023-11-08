import React, { useState } from 'react';
import { layTienIchTheoId, editTienIch, editTienIchkhonghinh } from '../../services/admin/DungService.js';
import { baseURL } from "../../services/my-axios";
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

class SuaTienIch extends React.Component {

    state = {
        id: "",
        ten: "",
        hinh: null,
        trangthai: 0,
    }
    async componentDidMount() {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const id = params.get('id');
        let res = await layTienIchTheoId(id);
        if (res != null) {
            this.setState({
                id: res.id,
                ten: res.ten,
                hinh: res.hinh,
            })
        }
    }

    thayDoiTen(event) {
        this.setState({
            ten: event.target.value
        })
    }
    thayDoiHinh(event) {
        this.setState({
            hinh: event.target.files[0]
        })
    }
    async kiemTraRong() {
        if (this.state.ten !== "") {
            if (this.state.hinh !== "") {
                let res = await editTienIchkhonghinh(this.state.id, this.state.ten, this.state.trangthai);
                if (res != null) {
                    toast.success("Sua Tiện Ích Thành Công!");
                }
                else {
                    let res = await editTienIch(this.state.id, this.state.ten, this.state.hinh, this.state.trangthai);
                    if (res != null) {
                        toast.success("Sua Tiện Ích Thành Công!");
                    }
                    else {
                        toast.error("Sua Tiện Ích Thất Bại!");
                    }
                }
            }
        }
        else {
            toast.warning("Không Được Bỏ Trống Tên!");
        }
    }

    render() {
        let { id, ten, hinh } = this.state;
        return (
            <form className="form-control" action='#' encType="multipart/form-data" method="post">
                <div className="main">
                    <main className="content">
                        <div className="container-fluid p-0">
                            <div className="card flex-fill">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5 className="card-title mb-0">EDIT tiện ích</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-2 align-items-center">
                                    <label class="form-label">ID: {id}</label>
                                    <div class="col-auto">
                                        <label class="col-form-label">Tên Tiện Ích Mới:</label>
                                    </div>
                                    <div class="col-auto">
                                        <input class="form-control form-control-lg" Value={ten} onChange={(event) => this.thayDoiTen(event)} type="text" id="ten" name="ten" placeholder="Nhập tên tiện ích"></input>
                                    </div>
                                </div>
                                <label class="form-label">Hình Cũ</label>
                                <td className="d-none d-xl-table-cell">
                                    <img
                                        src={baseURL + hinh}
                                        alt={baseURL + hinh}
                                        width="400px"
                                        height="200px"
                                    />
                                </td>
                                <div class="col-auto">
                                    <label class="form-label">UpLoad Hình Mới</label>
                                    <input onChange={(event) => this.thayDoiHinh(event)} type="file" id="hinh" name="hinh" className="form-control form-control-lg" />
                                </div>
                                <div className="col-md">
                                    <NavLink to={`/quanlytienich`}><button className="btn btn-primary" onClick={() => this.kiemTraRong()} type="button" >Sửa</button></NavLink>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </form>
        )
    }
}
export default SuaTienIch;