import React from 'react';
import axios from 'axios';


class QuanLyKhuVuc extends React.Component {
    state = {
        listQuan: []
    }
    async componentDidMount() {
        let res = await axios.get('http://127.0.0.1:8000/api/quan');
        if (res.data != null) {
            this.setState({
                listQuan: res.data
            })
            console.log(this.state.listQuan);
            console.log(res);
        }
    }
   
    render() {
        let { listQuan } = this.state;
        return (
            <>

                <div className="main">
                    <main className="content">
                        <div className="container-fluid p-0">
                            <div className="card flex-fill">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5 className="card-title mb-0">Quản lý khu vực</h5>
                                        </div>
                                        <div className="col-md-9">
                                            {/* <button className="btn btn-primary"
                                                onClick={() => this.handleAddNewKhuVuc(this)}><i className='fas fa-plus'></i> Thêm mới khu vực
                                            </button> */}
                                            <a href="addKhuVuc" className="btn btn-primary">Thêm Khu Vực</a>
                                        </div>
                                    </div>
                                </div>
                                <table className="table table-hover my-0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th className="d-none d-xl-table-cell">Quận</th>
                                            <th className="d-none d-md-table-cell">Xem phường</th>
                                            <th className="d-none d-md-table-cell">Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listQuan && listQuan.length > 0 && listQuan.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td className="d-none d-xl-table-cell">{item.tenQuan}</td>
                                                    {/* <td className="d-none d-xl-table-cell">{item.trangThai}</td> */}
                                                    <td className="d-none d-md-table-cell">
                                                        <a href="listPhuong" className="btn btn-primary">Xem phường</a>
                                                    </td>
                                                    <td className="d-none d-md-table-cell">
                                                        <a href="#" className="btn btn-primary">Sửa</a>
                                                        <a href="#" className="btn btn-secondary">Xóa</a>
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
export default QuanLyKhuVuc;