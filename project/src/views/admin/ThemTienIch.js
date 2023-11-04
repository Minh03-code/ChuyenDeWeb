import React from 'react';
import { addnewTienIch } from '../../services/admin/DungService.js';
import { ToastContainer, toast } from 'react-toastify';
class QuanLyTienIch extends React.Component {
    state = {
        ten: "",
        hinh: null,
    }
    kiemTraHinh() {
        if (this.state.hinh === "") {

        } else {

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
    kiemTraRong() {

        if (this.state.ten !== "") {
            console.log(this.state.ten);
            if (this.capNhat()) {
                toast.success("Cập Nhật Thông Tin Thành Công!");
            }
            else {
                toast.error("Cập Nhật Thất Bại!");
            }
        }
        else {
            toast.warning("Không Được Bỏ Trống Tên!");
        }

    }
    async capNhat(event) {
        let res = await addnewTienIch(this.state.ten, this.state.hinh);
    }
    render() {
        let { ten, hinh } = this.state;
        return (
            <form className="form-control" encType="multipart/form-data" method="post">
                <>
                    <div className="main">
                        <main className="content">
                            <div className="container-fluid p-0">
                                <div className="card flex-fill">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <h5 className="card-title mb-0">Thêm tiện ích</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <input class="form-control form-control-lg" value={ten} onChange={(event) => this.thayDoiTen(event)} type="text" id="ten" name="ten" placeholder="Nhập tên tiện ích mới"></input>
                                    <div className="mb-3">
                                        <label htmlFor="hinh" className="form-label">Thêm Hình</label>
                                        <input onChange={(event) => this.thayDoiHinh(event)} type="file" value={hinh} id="hinh" name="hinh" className="form-control" />
                                    </div>
                                    <div className="col-md">
                                        <button className="btn btn-primary" onClick={() => this.kiemTraRong()}>Thêm</button>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </>
            </form>
        )
    }
}
export default QuanLyTienIch;