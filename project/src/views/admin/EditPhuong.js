import React from 'react';
import { NavLink} from "react-router-dom";
import { toast } from 'react-toastify';
import { getDetailPhuongCallAPI, editPhuongCallAPI } from '../../services/admin/ThinhService';

class EditPhuong extends React.Component {
    state = {
        id: "",
        tenPhuong: "",
        idQuan: "",
        trangThai: ""
    }
    async componentDidMount() {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const kitu = params.get('id');
        console.log(kitu);

        let resDetailService = await getDetailPhuongCallAPI(kitu);
        if (resDetailService != null) {
            this.setState({
                id: resDetailService.id,
                tenPhuong: resDetailService.tenPhuong,
                idQuan: resDetailService.idQuan,
                trangThai: resDetailService.trangThai
            })
        }
    }
    thayDoiTenPhuong(e) {
        this.setState({
            tenPhuong: e.target.value
        })
    }
    thayDoiIDQuan(e) {
        this.setState({
            idQuan: e.target.value
        })
    }
    
    kiemTraRong() {
        if (this.state.tenPhuong === "" || this.state.idQuan === "") {
            return false;
        }
        return true;
    }
    async capNhatPhuong() {
        if (window.confirm("Xác nhận sửa phuong " + (this.state.id))) {
            if (this.kiemTraRong()) {
                const search = window.location.search;
                const params = new URLSearchParams(search);
                const kitu = params.get('id');
                let res = await editPhuongCallAPI(kitu, this.state.tenPhuong, this.state.idQuan);
                if (res != null) {
                    toast.success("Đổi Thành Công!");
                    this.componentDidMount();
                }
            }
            else {
                toast.warning("Không Được Để Rỗng!");
            }
        }

    }

    render() {
        let { id, tenPhuong, idQuan, trangThai } = this.state

        return (
            <>
                <div className="main">
                    <main className="content">
                        <div className="container-fluid p-0">


                            <div className="card flex-fill">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5 className="card-title mb-0">Sửa Phuong co ID: {id}</h5>
                                        </div>

                                    </div>
                                </div>
                                <table className="table table-hover my-0">
                                    <tbody>

                                        <div>
                                            <label class="form-label">Ten Phuong</label>
                                            <input type="text" class="form-control" Value={tenPhuong} onChange={(e) => this.thayDoiTenPhuong(e)}></input>
                                        </div>
                                        <div>
                                            <label class="form-label">ID Quan</label>
                                            <input type="text" class="form-control" Value={idQuan} onChange={(e) => this.thayDoiIDQuan(e)}></input>
                                        </div>
                                        
                                        <div className="card-header">
                                            <div>
                                                <div>
                                                    <h5 className="card-title mb-0">
                                                        <button className="btn btn-warning" onClick={() => this.capNhatPhuong()}>Sửa</button>
                                                        <NavLink to={`/admin/quanlykhuvuc`} ><button className="btn btn-primary btn_margin_left">Trở lại dach sách Quan</button></NavLink>
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
export default EditPhuong;