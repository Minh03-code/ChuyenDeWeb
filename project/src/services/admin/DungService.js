import { myAxios } from "../my-axios";

const getAllTienIchCallAPI = () => {
    return myAxios.get("api/laytatcatienich");
}
const getGoiCallAPI = (id) => {
    return myAxios.get(`api/goi/chitiet?id=${id}`);
}

// export { multiple };
export { getAllTienIchCallAPI, getGoiCallAPI };