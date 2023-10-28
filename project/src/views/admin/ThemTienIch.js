import React from 'react';
class QuanLyTienIch extends React.Component {
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
                                            <h5 className="card-title mb-0">Thêm tiện ích</h5>
                                        </div>
                                    </div>
                                </div>
                                <input class="form-control form-control-lg" type="text" placeholder="Nhập tên tiện ích mới"></input>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Thêm Hình</label>
                                    <input class="form-control" type="file" id="formFile"></input>
                                </div>
                                <div className="col-md">
                                    <a href="" className="btn btn-primary">Thêm</a>
                                </div>
                            </div>


                        </div>
                    </main>
                </div>
            </>
        )
    }
}
export default QuanLyTienIch;