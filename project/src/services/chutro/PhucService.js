import { myAxios } from "../my-axios";
const getChuTroById = (id) => {
  return myAxios.get(`api/chutro/thongtinchitiet?idTaiKhoan=${id}`);
};
const config = {
  headers: { "content-type": "multipart/form-data" },
};
const updateThongTinChuTroCoHinh = (
  idTaiKhoan,
  hinh,
  ten,
  soDienThoai,
  soTaiKhoanNganHang,
  tenChuTaiKhoanNganHang
) => {
  return myAxios.post(
    `api/capnhatthongtinchutrocohinh`,
    {
      idTaiKhoan: idTaiKhoan,
      ten: ten,
      soDienThoai: soDienThoai,
      soTaiKhoanNganHang: soTaiKhoanNganHang,
      tenChuTaiKhoanNganHang: tenChuTaiKhoanNganHang,
      hinh: hinh,
    },
    config
  );
};
const updateThongTinChuTroKhongCoHinh = (
  idTaiKhoan,
  ten,
  soDienThoai,
  soTaiKhoanNganHang,
  tenChuTaiKhoanNganHang
) => {
  return myAxios.post(
    `api/capnhatthongtinchutrokhonghinh`,
    {
      idTaiKhoan: idTaiKhoan,
      ten: ten,
      soDienThoai: soDienThoai,
      soTaiKhoanNganHang: soTaiKhoanNganHang,
      tenChuTaiKhoanNganHang: tenChuTaiKhoanNganHang,
    },
    config
  );
};
export {
  getChuTroById,
  updateThongTinChuTroCoHinh,
  updateThongTinChuTroKhongCoHinh,
};
