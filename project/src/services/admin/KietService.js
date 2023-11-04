import { myAxios } from "../my-axios";

const getAllMotelRoomOwnerCallAPI = () => {
    return myAxios.get("api/chutro/daxacthuc");
}
const getAllServiceCallAPI = () => {
    return myAxios.get("api/goi/all");
}
const getDetailServiceCallAPI = (id) => {
    return myAxios.get(`api/goi/chitiet?id=${id}`);
}
// export { multiple };
export { getAllMotelRoomOwnerCallAPI, getAllServiceCallAPI, getDetailServiceCallAPI };