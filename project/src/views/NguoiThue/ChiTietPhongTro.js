import React, { useEffect, useState } from "react";
import HeaderNguoiThue from "../item/HeaderNguoiThue";
import "./styles/chitietphong.css";
import anh1 from "../../images/anhnhatro.jpg";
import anh2 from "../../images/huongdan.jpg";
const ChiTietPhongTro = () => {
  useEffect(() => {
    suKien();
  }, []);
  const suKien = ()=>{
      const bgGreen = document.querySelector('.bg-green');
      const wrap = document.querySelector('.wrap');
      const items = document.querySelectorAll('.item');

      

      bgGreen.addEventListener('mousemove', function(e){
          var x = e.clientX;
          let width =  window.innerWidth;
          let percent = (x/width)*100 - 20;
          wrap.style.transform = `translateX(${-percent}%)`;
      });

      items.forEach(element => {
          element.addEventListener('click',function(e) {
              bgGreen.style.top = '100%';
              bgGreen.style.transitionTimingFunction = 'cubic-bezier(.27,-0.62,.83,.67)';
          
          });
      });
    
  }
  return (
    <>
      <div className="main-content activity_thong_tin_phong_tro">
        <div className="container">
          <div className="bao-ngoai">
            <div className="anh-chi-tiet-phong-tro">
                    <div class="bg-green">
                          <div class="wrap">
                              <div class="item"></div>
                              <div class="item"></div>
                              <div class="item"></div>
                              <div class="item"></div>
                              <div class="item"></div>
                              <div class="item"></div>
                              <div class="item"></div>
                              <div class="item"></div>
                              <div class="item"></div>
                              <div class="item"></div>
                          </div>
                    </div>
            </div>
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
