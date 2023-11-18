import React, { useEffect, useState } from "react";
import avt from "../../images/avt1.jpg";
import { Link, useParams } from "react-router-dom";
import { baseURL } from "../../services/my-axios";
import {
  getAllBannerApi,
  getDetailChuTro,
} from "../../services/admin/PhucService";
const ThongTin = () => {
  let { idTaiKhoan } = useParams();
  const [id, setId] = useState(window.sessionStorage.getItem("accountId"));
  console.log(id);
  const [result, setResult] = useState({});
  useEffect(() => {
    const fetchBanner = async () => {
      setResult(await getDetailChuTro(id));
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
              <span class="breadcrumb">
                <a href="#">Chủ Trọ: </a>
                {result.ten}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="single-product section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="left-image">
                <img src={baseURL + result.hinh} alt={baseURL + result.hinh} />
              </div>
            </div>
            <div class="col-lg-6 align-self-center">
              <div className="thongtinchutro">
                <h2 className="ten_chu_tro">{result.ten}</h2>
                <div className="chutro_info">
                  <b>Trạng Thái: </b>{" "}
                  {result.xacThuc == 1 ? (
                    <span class="fw-normal txt_green">Đã xác thực</span>
                  ) : (
                    <span class="fw-normal txt_red">Chưa xác thực</span>
                  )}
                </div>
                <div className="chutro_info">
                  <b>Số Điện Thoại: </b>
                  {result.soDienThoai}
                </div>
                <div className="chutro_info">
                  <b>Số Tài Khoản:</b> {result.soTaiKhoanNganHang}
                </div>
                <div className="chutro_info">
                  <b>Số Tài Khoản Ngân Hàng:</b> {result.tenChuTaiKhoanNganHang}
                </div>

                <Link
                  className="btn btn-primary bbt"
                  to={`/chutro/editthongtinchutro/${result.id}`}
                >
                  Chỉnh Sửa
                </Link>
                <button className="btn btn-warning bbt">Đổi Mật Khẩu</button>
                <button className="btn btn-success bbt">Xác Thực</button>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="sep"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThongTin;
