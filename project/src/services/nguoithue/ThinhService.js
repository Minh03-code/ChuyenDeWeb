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
) => {
  return myAxios.post(
    `api/capnhatthongtinnguoithuecohinh`,
    {
      idTaiKhoan: idTaiKhoan,
      hinh: hinh,
      ten: ten,
      soDienThoai: soDienThoai,
    },
    config
  );
};
const updateThongTinNguoiThueKhongCoHinh = (
  idTaiKhoan,
  ten,
  soDienThoai,
) => {
  return myAxios.post(
    `api/capnhatthongtinnguoithuekhonghinh`,
    {
      idTaiKhoan: idTaiKhoan,
      ten: ten,
      soDienThoai: soDienThoai,
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
