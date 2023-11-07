import { myAxios } from "../my-axios";

const getAllTienIchCallAPI = () => {
    return myAxios.get("api/laytatcatienich");
}
const layTienIchTheoId = (id) => {
    return myAxios.get(`api/laytienichtheoid?id=${id}`);
};
const config = {
    headers: { 'content-type': 'multipart/form-data' }
}
const addnewTienIch = (ten, hinh) => {
    return myAxios.post(`api/themtienich`, { ten: ten, hinh: hinh }, config);
}
const editTienIch = (id, ten, hinh) => {
    return myAxios.patch(`api/capnhattienich`, { id, ten: ten, hinh: hinh }, config);
}
const khoaTienIchTheoId = (id) => {
    return myAxios.delete(`api/khoatienich?id=${id}`);
};
// export { multiple };
export { getAllTienIchCallAPI, addnewTienIch, layTienIchTheoId, editTienIch };