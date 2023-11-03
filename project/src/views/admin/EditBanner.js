import React from "react";
import { useEffect, useState } from "react";
import { baseURL } from "../../services/my-axios.js";
import { NavLink } from "react-router-dom";
import { getBannerById } from "../../services/admin/PhucService.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAllBannerApi } from "../../services/admin/PhucService.js";

const EditBanner = () => {
  let { id } = useParams();
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const inputRef = useEffect(() => {
    async function getDataAPI() {
      setResult(await getBannerById(id));
      setLoading(true);
    }
    getDataAPI();
  }, []);

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
                    <th>ID</th>
                    <th className="d-none d-xl-table-cell">Hình</th>
                    <th className="d-none d-md-table-cell">Chức năng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="d-none d-xl-table-cell">
                      <img
                        src={baseURL + result.hinhBanner}
                        alt={baseURL + result.hinhBanner}
                        width="100px"
                        height="100px"
                      />
                    </td>
                    <td className="d-none d-md-table-cell">
                      {/* <NavLink to={`/editbanner/${item.id}`}>
                                <button
                                  type="button"
                                  className="btn btn-primary bbt"
                                >
                                  Chỉnh sửa
                                </button>
                              </NavLink> */}
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
