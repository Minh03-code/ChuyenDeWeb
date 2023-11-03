import React from "react";
import { baseURL } from "../../services/my-axios";
import { getAllBannerApi } from "../../services/admin/PhucService";
import { Link } from "react-router-dom";
class QuanLyBanner extends React.Component {
  state = {
    listAllBanner: [],
  };
  async componentDidMount() {
    let res = await getAllBannerApi();
    if (res != null) {
      this.setState({
        listAllBanner: res,
      });
    }
  }

  render() {
    let { listAllBanner } = this.state;
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
                      <a href="add-product.html" className="btn btn-primary">
                        Thêm
                      </a>
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
                    {listAllBanner &&
                      listAllBanner.length > 0 &&
                      listAllBanner.map((item, index) => {
                        return (
                          <tr>
                            <td>#{item.id}</td>
                            <td className="d-none d-xl-table-cell">
                              <img
                                src={baseURL + item.hinhBanner}
                                alt={baseURL + item.hinhBanner}
                                width="100px"
                                height="100px"
                              />
                            </td>
                            <td className="d-none d-md-table-cell">
                              <Link
                                to={`/editbanner/${item.id}`}
                                className="btn btn-primary"
                              >
                                Chỉnh sửa
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}
export default QuanLyBanner;
