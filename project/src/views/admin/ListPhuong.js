import React from 'react';
import axios from 'axios';
import QuanLyKhuVuc from './QuanLyKhuVuc';
class ListPhuong extends React.Component {
    state = {
        listPhuong: []
    }
    async componentDidMount() {
        alert(this.props.idQuan);
        let res = await axios.get(`http://127.0.0.1:8000/api/phuong/layphuongtheoquan?idQuan=${this.props.idQuan}`);
        if (res.data != null) {
            this.setState({
                listPhuong: res.data
            })
            console.log(this.state.listPhuong);
            console.log(res);
        }
    }
    

    render() {
        let { listPhuong } = this.state;
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
                                       
                                    </div>
                                </div>
                                <table className="table table-hover my-0">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th className="d-none d-xl-table-cell">IDQuận</th>
                                            <th className="d-none d-md-table-cell">Phường</th>
                                            <th className="d-none d-md-table-cell">Chức năng</th>
                                            {/* <th className="d-none d-md-table-cell">Chức năng</th> */}
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        {listPhuong && listPhuong.length > 0 && listPhuong.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td className="d-none d-xl-table-cell">{item.idQuan}</td>
                                                    <td className="d-none d-xl-table-cell">{item.tenPhuong}</td>
                                                    <td className="d-none d-md-table-cell">
                                                        <a href="#" className="btn btn-primary">Sửa</a>
                                                        <a href="#" className="btn btn-secondary">Xoá</a>
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
export default ListPhuong;