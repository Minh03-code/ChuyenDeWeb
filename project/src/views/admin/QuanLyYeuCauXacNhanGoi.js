import React from 'react';
class QuanLyYeuCauXacNhanGoi extends React.Component {
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
                                            <h5 className="card-title mb-0">Quản lý yêu cầu</h5>
                                        </div>
                                    </div>
                                </div>
                                <table className="table table-hover my-0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th className="d-none d-xl-table-cell">Tên chủ trọ</th>
                                            <th className="d-none d-xl-table-cell">Số phòng</th>
                                            <th className="d-none d-xl-table-cell">Thời gian</th>
                                            <th className="d-none d-xl-table-cell">Giá</th>
                                            <th className="d-none d-md-table-cell">Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#1111</td>
                                            <td className="d-none d-xl-table-cell">Nguyễn Tấn Dũng</td>
                                            <td className="d-none d-xl-table-cell">10</td>
                                            <td className="d-none d-xl-table-cell">30</td>
                                            <td className="d-none d-xl-table-cell">300000</td>
                                            <td className="d-none d-md-table-cell">
                                                <a href="#" className="btn btn-primary">Xem thông tin</a>
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
export default QuanLyYeuCauXacNhanGoi;