import { myAxios } from "../my-axios";

const getAllKhuVucApi = () => {
  return myAxios.get("api/laytatcaquan");
};
// export { multiple };
export { getAllKhuVucApi };
