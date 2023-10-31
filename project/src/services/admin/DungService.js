import { myAxios } from "../my-axios";

const getAllTienIchCallAPI = () => {
    return myAxios.get("api/laytatcatienich");
}
// export { multiple };
export { getAllTienIchCallAPI };