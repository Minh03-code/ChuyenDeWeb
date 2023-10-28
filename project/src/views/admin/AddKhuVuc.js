import React from 'react';
import axios from 'axios';

class AddKhuVuc extends React.Component {

    render() {

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
                                            <label for="STT" class="form-label">Id</label>
                                            <input type="STT" class="form-control"></input>
                                        </div>
                                        <div>
                                            <label for="tenquan" class="form-label">Tên Quận</label>
                                            <input type="tenquan" class="form-control"></input>
                                        </div>
                                        <div>
                                            <label for="trangThai" class="form-label">Trạng Thái</label>
                                            <input type="trangThai" class="form-control"></input>
                                        </div>
                                        <div>
                                            <label for="formFileLg" class="form-label">Hình ảnh</label>
                                            <input class="form-control form-control-lg" id="formFileLg" type="file" />
                                        </div>
                                       
                                        <a href="#" className="btn btn-primary">Thêm</a>
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