import React, { useEffect, useState } from "react";
import Header from "../item/Header";
import { ToastContainer } from "react-toastify";
import InputFile from "../item/InputFile";
import "./editthongtinchutro.css";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../services/my-axios";
import {
  getTrangThai,
  guiYeuCauXacThuc,
} from "../../services/chutro/PhucService";
import { toast } from "react-toastify";

const XacThucChuTro = () => {
  let params = useParams();
  console.log("check id chu tro", params.id);

  let idChuTro = params.id;

  let nav = useNavigate();
  let [result, setResult] = useState(null);

  const [idTaiKhoan, setIdTaiKhoan] = useState(
    sessionStorage.getItem("accountId")
  );

  useEffect(() => {
    async function getTrangThaiXacThucAPI() {
      let res = await getTrangThai(idChuTro);

      if (res != "") {
        setResult(res);

        if (res.trangThaiXacThuc === 0) {
          let xacThuc = document.querySelector(".text_xac_thuc");
          xacThuc.style.color = "orange";
          xacThuc.textContent = "Đang chờ xác thực";
        } else {
          let xacThuc = document.querySelector(".text_xac_thuc");
          xacThuc.textContent = "Đã xác thực";
          xacThuc.style.color = "green";
        }
      } else {
        let xacThuc = document.querySelector(".text_xac_thuc");
        xacThuc.textContent = "Chưa xác thực";
        xacThuc.style.color = "red";
      }
    }

    getTrangThaiXacThucAPI();
  }, []);

  const [file, setFile] = useState("");
  const [file2, setFile2] = useState("");

  const onClickImageCCCDMT = (file) => {
    let dungLuong = file.size / 1024 / 1024;
    if (dungLuong < 2) {
      setFile(file);
    } else {
      toast.warning("File tối đa 2mb");
    }
  };

  const onClickImageCCCDMS = (file2) => {
    let dungLuong = file2.size / 1024 / 1024;
    if (dungLuong < 2) {
      setFile(file2);
    } else {
      toast.warning("File tối đa 2mb");
    }
  };

  const guiYeuCauXacThucApi = async (idChuTro, file, file2) => {
    const res = await guiYeuCauXacThuc(idChuTro, file, file2);

    console.log("idChuTro", idChuTro);
    console.log("tenfile", file.name);
    console.log("tenfile", file2.name);
  };

  const onClickGui = () => {
    if (file.name == null && file2.name == null) {
      toast.warning("Vui lòng chọn ảnh!!!");
    } else {
      guiYeuCauXacThucApi(idChuTro, file, file2);
      toast.success("Gửi yêu cầu xác thực thành công");
    }
  };

  return (
    <>
      <Header tenManHinh={"Xác thực thông tin chủ trọ"} />
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

      <div className="text_xac_thuc">
        <div className="text_chua_xacthuc"></div>
      </div>

      <div class="wrapperp rounded bg-white">
        <div className="cha">
          {result != null ? (
            <img
              className="hinh-banner"
              src={baseURL + result.cccdMatTruoc}
              alt=""
              width="100px"
              height="100px"
            />
          ) : (
            <img
              className="hinh-banner"
              src="https://whois.tenten.vn/image/upload-icon-PNG.png"
              alt=""
              width="100px"
              height="100px"
            />
          )}
        </div>

        <div className="mb-3">
          <InputFile lable={"Chon hinh"} onChangeFile={onClickImageCCCDMT} />
        </div>
      </div>

      <div class="wrapperp rounded bg-white">
        <div className="cha">
          {result != null ? (
            <img
              className="hinh-banner"
              src={baseURL + result.cccdMatSau}
              alt=""
              width="100px"
              height="100px"
            />
          ) : (
            <img
              className="hinh-banner"
              src="https://whois.tenten.vn/image/upload-icon-PNG.png"
              alt=""
              width="100px"
              height="100px"
            />
          )}
        </div>

        <div className="mb-3">
          <InputFile lable={"Chon hinh"} onChangeFile={onClickImageCCCDMS} />
        </div>
      </div>

      <div className="cha">
        <button class="btn btn-primary gui2" onClick={onClickGui}>
          Gửi yêu cầu xác thực
        </button>
      </div>
    </>
  );
};

export default XacThucChuTro;
