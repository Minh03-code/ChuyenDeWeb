import React from 'react';
import axios from 'axios';

class QuanLyChuTro extends React.Component {

    state = {
        listMotelRoom: []
    }
    async componentDidMount() {
        let res = await axios.get('http://192.168.2.30/3t/laravel/public/api/chutro/all');
        if (res.data != null) {
            this.setState({
                listMotelRoom: res.data
            })
            console.log(this.state.listMotelRoom);
            console.log(res);
        }
    }

    render() {
        let { listMotelRoom } = this.state;
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
                                            <th className="d-none d-xl-table-cell">Tên</th>
                                            <th className="d-none d-xl-table-cell">Số điện thoại</th>
                                            <th>Trang thái</th>
                                            <th className="d-none d-md-table-cell">Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listMotelRoom && listMotelRoom.length > 0 && listMotelRoom.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td className="d-none d-xl-table-cell">{item.ten}</td>
                                                    <td className="d-none d-xl-table-cell">{item.soDienThoai}</td>
                                                    <td>
                                                        {item.xacThuc = 1 ? <>Đang hoạt động <a href="#" className="btn btn-danger">Khóa</a></> : <>Đã khóa <a href="#" className="btn btn-success">Mở khóa</a></>}
                                                    </td>
                                                    <td className="d-none d-md-table-cell">
                                                        <a href="#" className="btn btn-primary">Chỉnh sửa</a>
                                                    </td>
                                                </tr>
                                            )
                                        })}
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
export default QuanLyChuTro;