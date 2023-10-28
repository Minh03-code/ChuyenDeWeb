import { myAxios } from "../my-axios";

const getAllBannerApi = () => {
  return myAxios.get("api/banner/all");
};
// export { multiple };
export { getAllBannerApi };
