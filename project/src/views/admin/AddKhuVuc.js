import React from 'react';
import axios from 'axios';
import { NavLink, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { addQuanCallAPI } from '../../services/admin/ThinhService';
import QuanLyKhuVuc from './QuanLyKhuVuc';

class AddKhuVuc extends React.Component {
    state = {
        id: "",
        tenQuan: "",
        image: "",
        trangThai: ""
    }

    thayTenQuan(e) {
        this.setState({
            tenQuan: e.target.value
        })
    }
    thayHinh(e) {
        this.setState({
            image: e.target.value
        })
    }

    kiemTraRong() {
        if (this.state.tenQuan === "" || this.state.image === "") {
            return false;
        }
        return true;
    }
    async themQuan() {
        if (window.confirm("Xác nhận thêm quận")) {
            if (this.kiemTraRong()) {
                let res = await addQuanCallAPI(this.state.tenQuan, this.state.image);
                if (res != null) {
                    toast.success("Thêm Thành Công!");
                }
            }
            else {
                toast.warning("Không Được Để Rỗng!");
            }
        }
        

    }

    render() {
        console.log(this.themQuan);
        let { id, tenQuan, image, trangThai } = this.state

        return (
            <>
                <div className="main">
                    <main className="content">
                        <div className="container-fluid p-0">


                            <div className="card flex-fill">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5 className="card-title mb-0">Thêm Quận</h5>
                                        </div>

                                    </div>
                                </div>
                                <table className="table table-hover my-0">
                                    {/* <thead>
                                        <tr>
                                            <input placeholder='Nhap STT' name="myInput" />
                                        </tr>
                                        <tr>
                                            <input placeholder='Nhap ID QUẬN' name="myInput" />
                                        </tr>
                                        <tr>
                                            <input placeholder='Nhap Phường' name="myInput" />
                                        </tr>

                                    </thead> */}
                                    <tbody>

                                        <div>
                                            <label class="form-label">Tên Quận</label>
                                            <input type="text" class="form-control" Value={tenQuan} onChange={(e) => this.thayTenQuan(e)}></input>
                                        </div>
                                        <div>
                                            <label class="form-label">Hình ảnh</label>
                                            <input type="file" class="form-control" Value={image} onChange={(e) => this.thayHinh(e)}></input>
                                        </div>
                                       
                                        <div className="card-header">
                                            <div>
                                                <div>
                                                    <h5 className="card-title mb-0">
                                                        <button className="btn btn-primary btn_margin_left" onClick={() => this.themQuan()}>Thêm Quận</button>
                                
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </tbody>




                                </table>
                            </div>


                        </div>
                    </main>
                </div>
            </>
        )
    }
}
export default AddKhuVuc;