import React, { useState } from 'react';
import { getDetailPhuongCallAPI, editPhuongCallAPI } from '../../services/admin/ThinhService';
import { baseURL } from "../../services/my-axios";
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

class EditPhuong extends React.Component {

    state = {
        id: "",
        tenPhuong: "",
        idQuan: "",
        trangThai: 0,
    }
    async componentDidMount() {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const id = params.get('id');
        let res = await getDetailPhuongCallAPI(id);
        if (res != null) {
            this.setState({
                list: res,
                id: res.id,
                tenPhuong: res.tenPhuong,
                idQuan: res.idQuan,
                trangthai: res.trangThai
            })
        }
    }

    thayDoiTen(event) {
        this.setState({
            tenPhuong: event.target.value
        })
    }
    thayIDQuan(event) {
        this.setState({
            idQuan: event.target.value
        })
    }
    async kiemTraRong() {
        if (this.state.tenPhuong !== "") {

            let res = await editPhuongCallAPI(this.state.id, this.state.tenPhuong, this.state.idQuan, this.state.trangThai);
            if (res != null) {
                toast.success("Sửa Thành Công!");

            }
            else {
                toast.error("Sửa Thất Bại!");
            }

        }
        else {
            toast.warning("Không Được Bỏ Trống Tên!");
        }
    }

    render() {
        let { id, tenPhuong, idQuan } = this.state;

        return (
            <form className="form-control" action='#' encType="multipart/form-data" method="post">
                <div className="main">
                    <main className="content">
                        <div className="container-fluid p-0">
                            <div className="card flex-fill">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5 className="card-title mb-0">EDIT Phường</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-2 align-items-center">
                                    <label class="form-label">ID: {id}</label>
                                    <div class="col-auto">
                                        <label class="col-form-label">Tên Phường Mới:</label>
                                    </div>
                                    <div class="col-auto">
                                        <input class="form-control form-control-lg" Value={tenPhuong} onChange={(event) => this.thayDoiTen(event)} type="text" id="tenPhuong" name="tenPhuong" placeholder="Nhập tên phường"></input>
                                    </div>
                                    <div class="col-auto">
                                        <label class="col-form-label">ID Quận</label>
                                    </div>
                                    <div class="col-auto">
                                        <input type="text" class="form-control" Value={idQuan} onChange={(event) => this.thayIDQuan(event)}></input>
                                    </div>
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
export default EditPhuong;