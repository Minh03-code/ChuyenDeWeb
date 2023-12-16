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
  let [result, setResult] = useState({});

  const [idTaiKhoan, setIdTaiKhoan] = useState(
    sessionStorage.getItem("accountId")
  );

  useEffect(() => {
    async function getTrangThaiXacThucAPI() {
      setResult(await getTrangThai(idChuTro));
    }
    getTrangThaiXacThucAPI();
  }, []);

  const [file, setFile] = useState("");
  const [file2, setFile2] = useState("");

  const onClickImageCCCDMT = (file) => {
    setFile(file);
  };
  console.log("tenfile", file.name);

  const onClickImageCCCDMS = (file2) => {
    setFile2(file2);
  };

  const guiYeuCauXacThucApi = async (idChuTro, file, file2) => {
    const res = await guiYeuCauXacThuc(idChuTro, file, file2);
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
      <div class="wrapperp rounded bg-white">
        {/* <p className="text_cccd">Căn cước công dân mặt trước <img className="icon_cccd" src=""></img></p> */}
        <div className="cha">
          {result ? (
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
          {result ? (
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
        <button class="btn btn-primary gui" onClick={onClickGui}>
          Gửi yêu cầu xác thực
        </button>
      </div>
    </>
  );
};

export default XacThucChuTro;
