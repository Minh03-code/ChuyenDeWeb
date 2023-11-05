import React from 'react';
import { layTienIchTheoId } from '../../services/admin/DungService.js';
import { baseURL } from "../../services/my-axios";
import { useParams } from 'react-router-dom';
import { Value } from 'sass';

class SuaTienIch extends React.Component {

    state = {
        id: "",
        ten: "",
        hinh: null,
    }
    async componentDidMount() {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const id = params.get('id');
        let res = await layTienIchTheoId(id);
        if (res != null) {
            this.setState({
                id: res.id,
                ten: res.ten,
                hinh: res.hinh,
            })
        }
    }

    render() {
        let { id, ten, hinh } = this.state;

        return (
            <form className="form-control">
                <div className="main">
                    <main className="content">
                        <div className="container-fluid p-0">
                            <div className="card flex-fill">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5 className="card-title mb-0">EDIT tiện ích</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-2 align-items-center">
                                    <label class="form-label">ID: {id}</label>
                                    <label id="hinh" name="hinh" class="form-label">Tiện Ích: {ten}</label>
                                    <div class="col-auto">
                                        <label class="col-form-label">Tên Tiện Ích Mới:</label>
                                    </div>
                                    <div class="col-auto">
                                        <input class="col-form-label" Value={ten}></input>
                                    </div>
                                </div>
                                <label class="form-label">Hình Cũ</label>
                                <td className="d-none d-xl-table-cell">
                                    <img
                                        src={baseURL + hinh}
                                        alt={baseURL + hinh}
                                        width="400px"
                                        height="200px"
                                    />
                                </td>
                                <div class="mb-3">
                                    <label class="form-label">UpLoad Hình Mới</label>
                                    <input class="form-control" type="file" id="formFile"></input>
                                </div>
                                <div className="col-md">
                                    <button className="btn btn-primary">EDIT</button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </form>
        )
    }
}
export default SuaTienIch;