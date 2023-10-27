import {myAxios} from "../my-axios";
const getProfileAdmin = () => {
    return myAxios.get("api/thongtinadmin?id=1");
}
// export { multiple };
export {getProfileAdmin};