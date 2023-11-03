import { myAxios } from "../my-axios";

const getAllBannerApi = () => {
  return myAxios.get("api/banner/all");
};

const getBannerById = (id) => {
  return myAxios.get(`api/banner/chitiet?id=${id}`);
};
// export { multiple };
export { getAllBannerApi, getBannerById };
