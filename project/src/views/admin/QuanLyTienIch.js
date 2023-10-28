import React from 'react';
import { getAllTienIchCallAPI } from '../../services/admin/DungService';
class QuanLyTienIch extends React.Component {
    state = {
        listTienIch: []
    }
    hideLoader = () => console.log(1);;
    async componentDidMount() {
        let res = await getAllTienIchCallAPI();
        if (res != null) {
            this.setState({
                listTienIch: res
            })
        }
    }
    render() {
        let { listTienIch } = this.state;
        return (
            <>
                <div className="main">
                    <main className="content">
                        <div className="container-fluid p-0">


                            <div className="card flex-fill">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5 className="card-title mb-0">Quản lý tiện ích</h5>
                                        </div>
                                        <div className="col-md-9">
                                            <a href="ThemTienIch" className="btn btn-primary">Thêm</a>
                                        </div>
                                    </div>
                                </div>
                                <table className="table table-hover my-0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th className="d-none d-xl-table-cell">Hình</th>
                                            <th className="d-none d-xl-table-cell">Tên tiện ích</th>
                                            <th className="d-none d-md-table-cell">Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listTienIch && listTienIch.length > 0 && listTienIch.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td className="d-none d-xl-table-cell">{item.ten}</td>
                                                    <td className="d-none d-xl-table-cell">{item.hinh}</td>
                                                    <td className="d-none d-md-table-cell">
                                                        <a href="#" className="btn btn-primary">EDIT</a>
                                                        <a href="#" className="btn btn-danger">DELETE</a>
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
export default QuanLyTienIch;