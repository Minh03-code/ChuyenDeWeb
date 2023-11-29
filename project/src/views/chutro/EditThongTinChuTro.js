import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./editthongtinchutro.css";
import { baseURL } from "../../services/my-axios.js";
import { async } from "q";
import {
  getChuTroById,
  updateThongTinChuTroCoHinh,
  updateThongTinChuTroKhongCoHinh,
} from "../../services/chutro/PhucService";
import { ToastContainer, toast } from "react-toastify";
const EditThongTinChuTro = () => {
  let params = useParams();
  console.log("check id chu tro", params.id);

  let nav = useNavigate();
  let [result, setResult] = useState({});
  let [idTaiKhoan, setIdTaiKhoan] = useState(2);

  console.log(idTaiKhoan);
  const [id, setId] = useState(window.sessionStorage.getItem("accountId"));
  const [file, setFile] = useState({});
  const [data, setData] = useState({});
  const [checkChooseFile, setCheckChooseFile] = useState(false);
  const [isObject, setIsObject] = useState({});
  const [ten, setTen] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [soTaiKhoanNganHang, setSoTaiKhoanNganHang] = useState("");
  const [tenChuTaiKhoanNganHang, setTenChuTaiKhoanNganHang] = useState("");

  const inputRef = useEffect(() => {
    async function getDataAPI() {
      setResult(await getChuTroById(idTaiKhoan));
    }
    getDataAPI();
  }, []);

  const onClcikChangeImage = (event) => {
    setCheckChooseFile(true);
    setFile(event.target.files[0]);
  };

  const changeTen= () =>{
    setTen()
  }

  const onClickUpdate = () => {
    alert("H");
  };

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
      <div class="wrapperp rounded bg-white">
        <div className="cha">
          <img
            className="hinh-banner"
            src={baseURL + result.hinh}
            alt=""
            width="100px"
            height="100px"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="hinh" className="form-label">
            Ảnh chủ trọ
          </label>
          <input
            type="file"
            id="hinh"
            name="hinh"
            onChange={onClcikChangeImage}
            placeholder="Chọn Hình Đại Diện"
            className="form-control"
          />
        </div>

        <div class="form">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <label>Tên</label>
              <input
                type="text"
                value={ten}
                onChange={changeTen}
                class="form-control"
                placeholder="Nhập tên ..."
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-3">
              <label>Số điện thoại</label>
              <input
                type="text"

                value={soDienThoai}
                class="form-control"
                placeholder="Nhập số điện thoại ..."
              />
            </div>
          </div>{" "}
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <label>Số tài khoản ngân hàng</label>
              <input
                type="text"
                class="form-control"
                value={soTaiKhoanNganHang}
                placeholder="Nhập số tài khoản ngân hàng ..."
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-3">
              <label>Tên chủ tài khoản ngân hàng</label>
              <input
                type="text"
                value={tenChuTaiKhoanNganHang}
                class="form-control"
                placeholder="Nhập tên chủ tài khoản ngân hàng ..."
              />
            </div>
          </div>
          <button class="btn btn-primary mt-3" onClick={onClickUpdate}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default EditThongTinChuTro;
