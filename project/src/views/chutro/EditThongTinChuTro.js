import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./editthongtinchutro.css";

const EditThongTinChuTro = () => {
  let params = useParams();
  console.log("check id chu tro", params.id);

  let nav = useNavigate();
  let [result, setResult] = useState({});
  const [file, setFile] = useState({});
  const [data, setData] = useState({});
  const [checkChooseFile, setCheckChooseFile] = useState(false);


  return (
    <>
      <div class="page-heading header-text">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h3>Thông Tin</h3>
              <span class="breadcrumb">
                <a href="#">Chủ Trọ: </a>
                {/* {result.ten} */}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapperp rounded bg-white">
        <div className="cha">
          <img className="hinh-banner" alt="" width="100px" height="100px" />
        </div>

        <div className="mb-3">
          <label htmlFor="hinh" className="form-label">
            Ảnh chủ trọ
          </label>
          <input
            type="file"
            id="hinh"
            name="hinh"
            placeholder="Chọn Hình Đại Diện"
            className="form-control"
          />
        </div>

        <div class="form">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <label>Tên</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="col-md-6 mt-md-0 mt-3">
              <label>Số điện thoại</label>
              <input type="text" class="form-control" required />
            </div>
          </div>{" "}
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <label>Số tài khoản ngân hàng</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="col-md-6 mt-md-0 mt-3">
              <label>Tên chủ tài khoản ngân hàng</label>
              <input type="text" class="form-control" required />
            </div>
          </div>
          <div class="btn btn-primary mt-3">Submit</div>
        </div>
      </div>
    </>
  );
};

export default EditThongTinChuTro;
