import React from "react";
import { useEffect, useState } from "react";
import { baseURL } from "../../services/my-axios.js";
import { NavLink } from "react-router-dom";
import { editBanner, getBannerById } from "../../services/admin/PhucService.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAllBannerApi } from "../../services/admin/PhucService.js";
import { async } from "q";

const EditBanner = () => {
  let { id } = useParams();
  const [hinh, setHinh] = useState("");
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const inputRef = useEffect(() => {
    async function getDataAPI() {
      setResult(await getBannerById(id));
      setLoading(true);
    }
    getDataAPI();
  }, []);

  async function editData(){
    setResult(await editBanner(id,hinh));
  }

  const ChangeImage = (event) => {
    const file = event.target.files[0];
    setHinh(event.target.files[0]);
  };

  console.log(loading);
  console.log(result.hinhBanner);
  return loading == true ? (
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
                </div>
              </div>
              <table className="table table-hover my-0">
                <thead>
                  <tr>
                    <th className="d-none d-xl-table-cell">Hình</th>
                    <th className="d-none d-md-table-cell">Chức năng</th>
                    <th className="d-none d-md-table-cell">Chinh sua</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="d-none d-xl-table-cell">
                      {hinh ? (
                        <img
                          src={baseURL + result.hinhBanner}
                          alt=""
                          width="100px"
                          height="100px"
                        />
                      ) : (
                        <img
                          src={baseURL + result.hinhBanner}
                          alt=""
                          width="100px"
                          height="100px"
                        />
                      )}
                    </td>
                    <td className="d-none d-md-table-cell">
                      <div className="mb-3">
                        <label htmlFor="hinh" className="form-label">
                          Ảnh Admin
                        </label>
                        <input
                          onClick={ChangeImage}
                          type="file"
                          id="hinh"
                          name="hinh"
                          placeholder="Chọn Hình Đại Diện"
                          className="form-control"
                        />
                      </div>
                      {/* <NavLink to={`/editbanner/${item.id}`}>
                                <button
                                  type="button"
                                  className="btn btn-primary bbt"
                                >
                                  Chỉnh sửa
                                </button>
                              </NavLink> */}
                    </td>
                    <td className="d-none d-md-table-cell">
                      <div className="mb-3">
                        <label htmlFor="hinh" className="form-label">
                          Ảnh Admin
                        </label>
                        <input
                          onClick={ChangeImage}
                          type="file"
                          id="hinh"
                          name="hinh"
                          placeholder="Chọn Hình Đại Diện"
                          className="form-control"
                        />
                      </div>
                     
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  ) : (
    <></>
  );
};

export default EditBanner;
