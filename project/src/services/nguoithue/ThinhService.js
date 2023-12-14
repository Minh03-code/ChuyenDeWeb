import { myAxios } from "../my-axios";
const getNguoiThueById = (id) => {
  return myAxios.get(`api/nguoithue/thongtinchitiet?idTaiKhoan=${id}`);
};
const config = {
  headers: { "content-type": "multipart/form-data" },
};
const updateThongTinNguoiThueCoHinh = (
  idTaiKhoan,
  hinh,
  ten,
  soDienThoai,
//   soTaiKhoanNganHang,
//   tenChuTaiKhoanNganHang
) => {
  return myAxios.post(
    `api/capnhatthongtinchutrocohinh`,
    {
      idTaiKhoan: idTaiKhoan,
      hinh: hinh,
      ten: ten,
      soDienThoai: soDienThoai,
    //   soTaiKhoanNganHang: soTaiKhoanNganHang,
    //   tenChuTaiKhoanNganHang: tenChuTaiKhoanNganHang,
    },
    config
  );
};
const updateThongTinNguoiThueKhongCoHinh = (
  idTaiKhoan,
  ten,
  soDienThoai,
//   soTaiKhoanNganHang,
//   tenChuTaiKhoanNganHang
) => {
  return myAxios.post(
    `api/capnhatthongtinchutrokhonghinh`,
    {
      idTaiKhoan: idTaiKhoan,
      ten: ten,
      soDienThoai: soDienThoai,
    //   soTaiKhoanNganHang: soTaiKhoanNganHang,
    //   tenChuTaiKhoanNganHang: tenChuTaiKhoanNganHang,
    },
    config
  );
};

const updatePassWord = (id, matKhaucu, matKhaumoi) => {
  return myAxios.patch(`api/taikhoan/doimatkhau`, {
    id: id,
    matKhaucu: matKhaucu,
    matKhaumoi: matKhaumoi,
  });
};

const getAccountById = (id) => {
  return myAxios.get(`api/taikhoan?id=${id}`);
};

export {
  getNguoiThueById,
  updateThongTinNguoiThueKhongCoHinh,
  updateThongTinNguoiThueCoHinh,
  updatePassWord,
  getAccountById,
};
