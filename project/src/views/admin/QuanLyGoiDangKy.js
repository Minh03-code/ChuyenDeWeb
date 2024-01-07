import React from 'react';
class QuanLyGoiDangKy extends React.Component {
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
                                            <h5 className="card-title mb-0">Quản lý gói dịch vụ</h5>
                                        </div>
                                        <div className="col-md-9">
                                            <a href="add-product.html" className="btn btn-primary">Thêm</a>
                                        </div>
                                    </div>
                                </div>
                                <table className="table table-hover my-0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th className="d-none d-xl-table-cell">Số phòng</th>
                                            <th className="d-none d-xl-table-cell">Thời gian(ngày)</th>
                                            <th className="d-none d-xl-table-cell">Giá</th>
                                            <th>Trang thái</th>
                                            <th className="d-none d-md-table-cell">Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#1111</td>
                                            <td className="d-none d-xl-table-cell">10</td>
                                            <td className="d-none d-xl-table-cell">30</td>
                                            <td className="d-none d-xl-table-cell">1000 đồng</td>
                                            <td>
                                                <a href="#" className="btn btn-danger">Khóa</a>
                                                <a href="#" className="btn btn-success">Mở khóa</a>
                                            </td>
                                            <td className="d-none d-md-table-cell">
                                                <a href="#" className="btn btn-primary">Chỉnh sửa</a>
                                            </td>
                                        </tr>
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
export default QuanLyGoiDangKy;