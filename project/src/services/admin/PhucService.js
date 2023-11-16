import { myAxios } from "../my-axios";

const getAllBannerApi = () => {
  return myAxios.get("api/banner/all");
};

const getBannerById = (id) => {
  return myAxios.get(`api/banner/chitiet?id=${id}`);
};

const config = {
  headers: { "content-type": "multipart/form-data" },
};
const editBanner = (id, hinh) => {
  return myAxios.post(`api/banner/edit`, { id: id, hinh: hinh }, config);
};

const getDetailChuTro = (idTaiKhoan) => {
  return myAxios.get(`api/chutro/chitiet?idTaiKhoan=${idTaiKhoan}`);
};

export { getAllBannerApi, getBannerById, editBanner, getDetailChuTro };
