import React, { useEffect, useState } from "react";
import HeaderNguoiThue from "../item/HeaderNguoiThue";
import "./styles/chitietphong.css";

const ChiTietPhongTro = () => {
  return (
    <>
      <div className="main-conten">
        <div className="container">
          <div className="bao-ngoai">
            <div className="anh">Hình ảnh</div>

            <div className="thong-tin">
              <div className="chi-tiet">Địa chỉ chi tiết</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChiTietPhongTro;
