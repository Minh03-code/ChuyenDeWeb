import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getDetailNguoiThue } from "../../services/nguoithue/PhucService";
import { baseURL } from "../../services/my-axios";
const ThongTinChuTro = () => {
  const [id, setId] = useState(sessionStorage.getItem("accountId"));
  console.log(id);
  const [result, setResult] = useState({});

  useEffect(() => {
    const fetchBanner = async () => {
      setResult(await getDetailNguoiThue(id));
      console.log(result);
    };
    fetchBanner();
  }, []);

  return (
    <>
      <div class="page-heading header-text">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h3>Thông Tin</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="single-product section">
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <img
                className="hinh-banner2"
                src={baseURL + result.hinh}
                alt={baseURL + result.hinh}
              />
            </div>
            <div class="col-lg-6 align-self-center">
              <div className="thongtinchutro">
                <div className="chutro_info">
                  <b>Tên: </b>
                  {result.ten}
                </div>

                <div className="chutro_info">
                  <b>Số Điện Thoại: </b>
                  {result.soDienThoai}
                </div>

                <Link
                  className="btn btn-primary bbt"
                  //   to={`/chutro/editthongtinchutro/${result.id}`}
                >
                  Chỉnh Sửa
                </Link>
                <Link
                  className="btn btn-warning bbt"
                  to={`/chutro/editpasswordchutro`}
                >
                  Đổi mật khẩu
                </Link>
                <Link
                  className="btn btn-success bbt"
                  //   to={`/chutro/xacthucchutro/${result.id}`}
                >
                  Xác Thực
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThongTinChuTro;
