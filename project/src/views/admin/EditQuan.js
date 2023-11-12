import React, { useState } from 'react';
import { layQuanTheoId, editQuan, editQuankhonghinh } from '../../services/admin/ThinhService';
import { baseURL } from "../../services/my-axios";
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

class EditQuan extends React.Component {

    state = {
        list: [],
        id: "",
        tenQuan: "",
        hinh: null,
        trangThai: 0,
    }
    async componentDidMount() {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const id = params.get('id');
        let res = await layQuanTheoId(id);
        if (res != null) {
            this.setState({
                list: res,
                id: res.id,
                tenQuan: res.tenQuan,
                trangthai: res.trangThai
            })
        }
    }

    thayDoiTen(event) {
        this.setState({
            tenQuan: event.target.value
        })
    }
    thayDoiHinh(event) {
        this.setState({
            hinh: event.target.files[0]
        })
    }
    async kiemTraRong() {
        if (this.state.tenQuan !== "") {
            if (this.state.hinh !== "") {
                let res = await editQuan(this.state.id, this.state.tenQuan, this.state.hinh, this.state.trangThai);
                if (res != null) {
                    toast.success("Sua quận Thành Công!");
                    window.location.reload()
                }
                else {
                    toast.error("Sua quận Thất Bại!");
                }
            }
        }
        else {
            toast.warning("Không Được Bỏ Trống Tên!");
        }
    }

    render() {
        let { id, tenQuan, hinh } = this.state;
        let { list } = this.state;
        return (
            <form className="form-control" action='#' encType="multipart/form-data" method="post">
                <div className="main">
                    <main className="content">
                        <div className="container-fluid p-0">
                            <div className="card flex-fill">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5 className="card-title mb-0">EDIT quận</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-2 align-items-center">
                                    <label class="form-label">ID: {id}</label>
                                    <div class="col-auto">
                                        <label class="col-form-label">Tên quận Mới:</label>
                                    </div>
                                    <div class="col-auto">
                                        <input class="form-control form-control-lg" Value={tenQuan} onChange={(event) => this.thayDoiTen(event)} type="text" id="tenQuan" name="tenQuan" placeholder="Nhập tên quận"></input>
                                    </div>
                                </div>
                                <label class="form-label">Hình Cũ</label>
                                <td className="d-none d-xl-table-cell">
                                    <img
                                        src={baseURL + list.hinh}
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
                                    <NavLink to={`/admin/quanlykhuvuc`}><button className="btn btn-primary" onClick={() => this.kiemTraRong()} type="button" >Sửa</button></NavLink>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </form>
        )
    }
}
export default EditQuan;