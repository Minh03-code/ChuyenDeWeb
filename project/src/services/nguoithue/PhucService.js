import { myAxios } from "../my-axios";
const getDetailNguoiThue = (id) => {
  return myAxios.get(`api/nguoithue/thongtinchitiet?idTaiKhoan=${id}`);
};
const getDetailPhongTro = (idPhong) => {
  return myAxios.get(`api/thongtinphongtro?idPhong=${idPhong}`);
};
const getDanhSachPhongTheoIdQuan = (idTaiKhoan) => {
  return myAxios.get(
    `api/nguoithue/danhsachphonggoiytheoquan?idTaiKhoan=${idTaiKhoan}`
  );
};
const getChuTroById = (idTaiKhoan) => {
  return myAxios.get(`api/chutro/chitiet?idTaiKhoan=${idTaiKhoan}`);
};
const guiYeuCauDatPhong = (idTaiKhoanGui, idTaiKhoanNhan, idPhong) => {
  return myAxios.post(`api/yeucaudatphong/them`, {
    idTaiKhoanGui: idTaiKhoanGui,
    idTaiKhoanNhan: idTaiKhoanNhan,
    idPhong: idPhong,
  });
};

const capNhatPhongGoiY = (idTaiKhoan, idQuan, tienCoc, gioiTinh) => {
  return myAxios.post(`api/nguoithue/capnhatphonggoiy`, {
    idTaiKhoan: idTaiKhoan,
    idQuan: idQuan,
    tienCoc: tienCoc,
    gioiTinh: gioiTinh,
  });
};

export {
  getDetailNguoiThue,
  getDetailPhongTro,
  getDanhSachPhongTheoIdQuan,
  getChuTroById,
  guiYeuCauDatPhong,
  capNhatPhongGoiY,
};
