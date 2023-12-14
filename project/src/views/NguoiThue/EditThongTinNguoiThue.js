import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./editthongtinnguoithue.css";
import { baseURL } from "../../services/my-axios.js";
import { async } from "q";
import {getNguoiThueById, updateThongTinNguoiThueCoHinh, updateThongTinNguoiThueKhongCoHinh,
} from "../../services/nguoithue/ThinhService.js";
import { ToastContainer, toast } from "react-toastify";
import InputText from "../item/InputText.js";
import InputFile from "../item/InputFile.js";
import Header from "../item/Header.js";
const EditThongTinNguoiThue = () => {
  let params = useParams();
  console.log("check id nguoi thue", params.id);

  let nav = useNavigate();
  let [result, setResult] = useState({});

  const [idTaiKhoan, setIdTaiKhoan] = useState(
    sessionStorage.getItem("accountId")
  );

  const [file, setFile] = useState();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [checkChooseFile, setCheckChooseFile] = useState(false);
  const [isObject, setIsObject] = useState({});
  const [ten, setTen] = useState("");
  const [soDienThoai, setSoDienThoai] = useState();
//   const [soTaiKhoanNganHang, setSoTaiKhoanNganHang] = useState();
//   const [tenChuTaiKhoanNganHang, setTenChuTaiKhoanNganHang] = useState("");

  useEffect(() => {
    async function getDataAPI() {
      setResult(await getNguoiThueById(idTaiKhoan));
      setLoading(true);
    }
    getDataAPI();
  }, []);

  const onClcikChangeImage = (file) => {
    setFile(file);
  };
  const changeTen = (text) => {
    setTen(text);
  };
  const changeSoDienThoai = (text) => {
    setSoDienThoai(text);
  };
//   const changeSoTaiKhoan = (text) => {
//     setSoTaiKhoanNganHang(text);
//   };
//   const changeTCTKNH = (text) => {
//     setTenChuTaiKhoanNganHang(text);
//   };

  const updateProfile1 = async (
    idTaiKhoan,
    ten,
    soDienThoai,
    // soTaiKhoanNganHang,
    // tenChuTaiKhoanNganHang
  ) => {
    const res = await updateThongTinNguoiThueKhongCoHinh(
      idTaiKhoan,
      ten,
      soDienThoai,
    //   soTaiKhoanNganHang,
    //   tenChuTaiKhoanNganHang
    );
  };

  const updateProfile2 = async (
    idTaiKhoan,
    ten,
    soDienThoai,
    // soTaiKhoanNganHang,
    // tenChuTaiKhoanNganHang,
    file
  ) => {
    const res = await updateThongTinNguoiThueCoHinh(
      idTaiKhoan,
      ten,
      soDienThoai,
    //   soTaiKhoanNganHang,
    //   tenChuTaiKhoanNganHang,
      file
    );
  };

  const onClickUpdate = () => {
    if (
      ten !== "" &&
      soDienThoai !== "" 
    //   soTaiKhoanNganHang !== "" &&
    //   tenChuTaiKhoanNganHang !== ""
    ) {
      if (file) {
        updateProfile2(
          idTaiKhoan,
          file,
          soDienThoai,
        //   soTaiKhoanNganHang,
        //   tenChuTaiKhoanNganHang
        );
        nav("/nguoithue/thongtin");
        toast.success("Cập nhật thông tin thành công");
      } else {
        updateProfile1(
          idTaiKhoan,
          ten,
          soDienThoai,
        //   soTaiKhoanNganHang,
        //   tenChuTaiKhoanNganHang
        );
        nav("/nguoithue/thongtin");
        toast.success("Cập nhật thông tin thành công");
      }
    } else {
      toast.warning("Không được bỏ trống thông tin");
    }
  };
  console.log(">>>89>>>" + result.ten);
  return (
    <>
      <Header tenManHinh={"Chỉnh sửa thông tin"} tenNguoiThue={result.ten} />
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
          <InputFile lable={"Chon hinh"} onChangeFile={onClcikChangeImage} />
        </div>

        <div class="form">
          <div class="row">
            {loading === true ? (
              <InputText
                label={"Tên"}
                type={"text"}
                value={result.ten}
                changeValue={changeTen}
              />
            ) : (
              <></>
            )}
            {loading === true ? (
              <InputText
                label={"Số điện thoại"}
                type={"text"}
                value={result.soDienThoai}
                changeValue={changeSoDienThoai}
              />
            ) : (
            //   <></>
            // )}
            // {loading === true ? (
            //   <InputText
            //     label={"Số tài khoản"}
            //     type={"text"}
            //     value={result.soTaiKhoanNganHang}
            //     changeValue={changeSoTaiKhoan}
            //   />
            // ) : (
            //   <></>
            // )}
            // {loading === true ? (
            //   <InputText
            //     label={"Tên chủ tài khoản ngân hàng"}
            //     type={"text"}
            //     value={result.tenChuTaiKhoanNganHang}
            //     changeValue={changeTCTKNH}
            //   />
            // ) : (
              <></>
            )}
          </div>
          <button class="btn btn-primary mt-3" onClick={onClickUpdate}>
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default EditThongTinNguoiThue;
