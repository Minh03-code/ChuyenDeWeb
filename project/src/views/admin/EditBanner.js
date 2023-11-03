import React from "react";
import { useEffect, useState } from "react";
import { baseURL } from "../../services/my-axios.js";
import { NavLink } from "react-router-dom";
import { getBannerById } from "../../services/admin/PhucService.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAllBannerApi } from "../../services/admin/PhucService.js";

const EditBanner = () => {
  let { id } = useParams();
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const inputRef = 
  useEffect(() => {
    async function getDataAPI() {
      setResult(await getBannerById(id));
      setLoading(true);
    }
    getDataAPI();
  }, []);

  console.log(loading);
  console.log(result.hinhBanner);
  return loading == true ? (
    <>
      <div className="main">
        <img
          src={baseURL + result.hinhBanner}
          alt={baseURL + result.hinhBanner}
          width="100px"
          height="100px"
        />

        <button type="file" onClick={handleOnClickChooseFIle}>Choose File</button>
      </div>
    </>
  ) : (
    <></>
  );
};

export default EditBanner;
