import React from 'react';
class QuanLyBanner extends React.Component {
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
                                            <h5 className="card-title mb-0">Quản lý chủ trọ</h5>
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
                                            <th className="d-none d-xl-table-cell">Hình</th>
                                            <th className="d-none d-md-table-cell">Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#1111</td>
                                            <td className="d-none d-xl-table-cell">11561665415-banner.png</td>
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
export default QuanLyBanner;