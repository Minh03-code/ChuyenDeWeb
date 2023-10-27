import { myAxios }from "../my-axios";

const getAllMotelRoomOwnerAuthenticationCallAPI = () => {
  return myAxios.get("api/xacthucchutro/all");
};
// export { multiple };
export { getAllMotelRoomOwnerAuthenticationCallAPI };
