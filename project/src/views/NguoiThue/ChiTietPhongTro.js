import React, { useEffect, useState } from "react";
import HeaderNguoiThue from "../item/HeaderNguoiThue";
import "./styles/chitietphong.css";
import anhThongTin from "./imgs/phuc/thongtin.png";
import anhUser from "./imgs/phuc/user.png";
import anhChuTro from "./imgs/phuc/newlogo.jpg";
import anhTienIch from "./imgs/phuc/utilities.png";
import anhDanhGia from "./imgs/phuc/online-shop.png";
import anhGoiY from "./imgs/phuc/question.png";
import anhPhong from "./imgs/phuc/phong.jpg";
import anhLoaiPhong from "./imgs/phuc/loaiphong.png";
import anhGioTinh from "./imgs/phuc/gioitinh.png";
import anhMap from "./imgs/phuc/map.png";
import anhSao from "./imgs/phuc/star.png";
import anhVote from "./imgs/phuc/vote.png";
import anhBinhLuan from "./imgs/phuc/coment.png";
import anhLienHe from "./imgs/phuc/lienhe.png";
import anhMoney from "./imgs/phuc/money.png";
import anhTinNhan from "./imgs/phuc/tinnhan.png";
import anhPlay from "./imgs/phuc/play-button.png";
import anhMayLanh from "./imgs/phuc/maylanh.png";
import tim1 from "./imgs/phuc/tim1.png";
import tim2 from "./imgs/phuc/tim2.png";

const ChiTietPhongTro = () => {
  useEffect(() => {
    suKien();
  }, []);

  const suKien = () => {
    const bgGreen = document.querySelector(".bg-green");
    const wrap = document.querySelector(".wrap");
    const items = document.querySelectorAll(".item");

    bgGreen.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      let width = window.innerWidth;
      let percent = (x / width) * 100 - 10;
      wrap.style.transform = `translateX(${-percent}%)`;
    });

    items.forEach((element) => {
      element.addEventListener("click", function (e) {
        bgGreen.style.top = "100%";
        bgGreen.style.transitionTimingFunction =
          "cubic-bezier(.27,-0.62,.83,.67)";
      });
    });
  };

  const openModal = ()=>{
    let modal = document.querySelector(".modal_video_review");
    modal.style.display = "unset"
  }
  const closeModal = ()=>{
    let modal = document.querySelector(".modal_video_review");
    modal.style.display = "none"
  }
  return (
    <>
      <div className="main-content">
        <div className="container">
          <div className="bao-ngoai">
            {/* <div className="anh"></div>  */}
            <div className="anh-chi-tiet-phong-tro">
              <div className="bg-green">
                <div className="wrap">
                  <img className="item" src={anhPhong} />
                  <img className="item" src={anhPhong} />
                  <img className="item" src={anhPhong} />
                  <img className="item" src={anhPhong} />
                  <img className="item" src={anhPhong} />
                </div>
              </div>
                <div className="modal_video_review">
                        <div className="area_content_video_review">
                            <div className="title_area_content_video_review_tro">
                                  Review Phòng Trọ 1
                                  
                            </div>
                            <div className="area_video_review_tro">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ION36k3dVNE?si=0Oed90clHiZ7S8l6" className="if_video_nt"  
                                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                            <div className="footer_area_content_video_review_tro" onClick={closeModal}>
                                  Đóng
                                  
                            </div>
                        </div>
                        
                </div>
            </div>

            

            <div className="thong-tin">
              <div className="dia-chi">
                <div className="dia-chi-left">
                  <p className="text-so-phong">
                    Phòng trọ trung tâm quận Thủ Đức
                  </p>
                  <div className="icon-tim">
                    <img className="anhTim" src={tim2}></img>
                  </div>
                </div>
                <div className="dia-chi-right">
                  <img className="icon-play" src={anhPlay}></img>
                  <button type="button" className="btn btn-warning" onClick={openModal}>
                    Review room
                  </button>
                </div>
              </div>

              <div className="thong-tin-chi-tiet">
                <div className="thong-tin-chi-tiet-left">
                  <div className="thong-tin-chi-tiet-left-ctp">
                    <div className="header-thong-tin">
                      <img className="anhThongTin" src={anhThongTin}></img>
                      <p className="textThongTin">Thông tin phòng</p>
                    </div>
                    <div className="mid-thong-tin">
                      <div className="item1">
                        <div className="label-thong-tin">Giá phòng</div>
                        <div className="label-thong-tin">Giá phòng</div>
                      </div>
                      <div className="item1">
                        <div className="label-thong-tin">Giá phòng</div>
                        <div className="label-thong-tin">Giá phòng</div>
                      </div>
                      <div className="item1">
                        <div className="label-thong-tin">Giá phòng</div>
                        <div className="label-thong-tin">Giá phòng</div>
                      </div>
                      <div className="item1">
                        <div className="label-thong-tin">Giá phòng</div>
                        <div className="label-thong-tin">Giá phòng</div>
                      </div>
                    </div>

                    <div className="mid-thong-tin">
                      <div className="item1">
                        <div className="label-thong-tin">Giá phòng</div>
                        <div className="label-thong-tin">Giá phòng</div>
                      </div>
                      <div className="item1">
                        <div className="label-thong-tin">Giá phòng</div>
                        <div className="label-thong-tin">Giá phòng</div>
                      </div>
                      <div className="item1">
                        <div className="label-thong-tin">Giá phòng</div>
                        <div className="label-thong-tin">Giá phòng</div>
                      </div>
                      <div className="item1">
                        <div className="label-thong-tin">Giá phòng</div>
                        <div className="label-thong-tin">Giá phòng</div>
                      </div>
                    </div>

                    <div className="mid-thong-tin">
                      <div className="item1">
                        <div className="label-thong-tin">Giá phòng</div>
                        <div className="label-thong-tin">Giá phòng</div>
                      </div>
                    </div>
                  </div>

                  <div className="thong-tin-chi-tiet-left-ctp">
                    <div className="header-thong-tin">
                      <img className="anhThongTin" src={anhTienIch}></img>
                      <p className="textThongTin">Tiện ích</p>
                    </div>
                    <div className="mid-thong-tin">
                      <div className="danh-gia-left">
                        <img className="icon-danh-gia" src={anhMayLanh} />
                        <p className="text-tien-ich">Máy lạnh</p>
                      </div>
                      <div className="danh-gia-left">
                        <img className="icon-danh-gia" src={anhMayLanh} />
                        <p className="text-tien-ich">Máy lạnh</p>
                      </div>
                      <div className="danh-gia-left">
                        <img className="icon-danh-gia" src={anhMayLanh} />
                        <p className="text-tien-ich">Máy lạnh</p>
                      </div>
                      <div className="danh-gia-left">
                        <img className="icon-danh-gia" src={anhMayLanh} />
                        <p className="text-tien-ich">Máy lạnh</p>
                      </div>
                    </div>
                    <div className="mid-thong-tin2">
                      <div className="danh-gia-left">
                        <img className="icon-danh-gia" src={anhMayLanh} />
                        <p className="text-tien-ich">Máy lạnh</p>
                      </div>
                      <div className="danh-gia-left">
                        <img className="icon-danh-gia" src={anhMayLanh} />
                        <p className="text-tien-ich">Máy lạnh</p>
                      </div>
                      <div className="danh-gia-left">
                        <img className="icon-danh-gia" src={anhMayLanh} />
                        <p className="text-tien-ich">Máy lạnh</p>
                      </div>
                      <div className="danh-gia-left">
                        <img className="icon-danh-gia" src={anhMayLanh} />
                        <p className="text-tien-ich">Máy lạnh</p>
                      </div>
                    </div>
                    <div className="mid-thong-tin2">
                      <div className="danh-gia-left">
                        <img className="icon-danh-gia" src={anhMayLanh} />
                        <p className="text-tien-ich">Máy lạnh</p>
                      </div>
                      <div className="danh-gia-left">
                        <img className="icon-danh-gia" src={anhMayLanh} />
                        <p className="text-tien-ich">Máy lạnh</p>
                      </div>
                      <div className="danh-gia-left">
                        <img className="icon-danh-gia" src={anhMayLanh} />
                        <p className="text-tien-ich">Máy lạnh</p>
                      </div>
                      <div className="danh-gia-left">
                        <img className="icon-danh-gia" src={anhMayLanh} />
                        <p className="text-tien-ich">Máy lạnh</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="thong-tin-chi-tiet-right">
                  <div className="thong-tin-chi-tiet-left-ctct">
                    <div className="header-thong-tin">
                      <img className="anhThongTin" src={anhUser}></img>
                      <p className="textThongTin">Thông tin chủ trọ</p>
                    </div>
                    <div className="mid-chu-tro">
                      <div className="avt-chu-tro">
                        <img className="avt-chu-tro-2" src={anhChuTro} />
                      </div>
                      <div className="thong-tin-chu-tro">
                        <div className="label-thong-tin">Giá phòng</div>
                        <div className="label-thong-tin">Giá phòng</div>
                      </div>
                    </div>
                  </div>
                  <div className="thong-tin-chi-tiet-left-ctct">
                    <div className="header-thong-tin">
                      <img className="anhThongTin" src={anhDanhGia}></img>
                      <p className="textThongTin">Vote</p>
                    </div>
                    <div className="mid-chu-tro">
                      <div className="danh-gia-left">
                        <img className="icon-danh-gia" src={anhVote} />
                        <div className="thong-tin-chu-tro2">
                          <button className="btn btn-outline-dark">
                            Đánh giá
                          </button>
                        </div>
                      </div>
                      <div className="danh-gia-right">
                        <img className="icon-danh-gia" src={anhBinhLuan} />
                        <div className="thong-tin-chu-tro2">
                          <button className="btn btn-outline-dark">
                            Bình luận
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="thong-tin-chi-tiet-left-ctct">
                    <div className="header-thong-tin">
                      <img className="anhThongTin" src={anhLienHe}></img>
                      <p className="textThongTin">Liên hệ</p>
                    </div>
                    <div className="mid-chu-tro">
                      <div className="danh-gia-left">
                        <img className="icon-danh-gia" src={anhMoney} />
                        <div className="thong-tin-chu-tro2">
                          <button className="btn btn-success">Đặt phòng</button>
                        </div>
                      </div>
                      <div className="danh-gia-right">
                        <img className="icon-danh-gia" src={anhTinNhan} />
                        <div className="thong-tin-chu-tro2">
                          <button className="btn btn-info">Nhắn tin</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="danh-sach-lien-quan">
            <div className="header-danh-sach">
              <p className="textLienQuan">
                Có thể bạn quan tâm
                <img className="anhThongTin" src={anhGoiY} />
              </p>
            </div>

            <div className="content-danh-sach">
              <div className="content-danh-sach-left">
                <img className="anhPhong" src={anhPhong} />
              </div>
              <div className="content-danh-sach-right">
                <p className="soPhong">Số phòng 9</p>
                <div className="thongTinChung">
                  <div className="thongTinChung-left">
                    <div className="thongTinChung-item">
                      <img className="iconThongTin" src={anhLoaiPhong} />
                      <p className="textThongTin2">Phòng cho thuê</p>
                    </div>
                    <div className="thongTinChung-item2">
                      <img className="iconThongTin" src={anhGioTinh} />
                      <p className="textThongTin2">Nam</p>
                    </div>
                    <div className="thongTinChung-item2">
                      <img className="iconThongTin" src={anhSao} />
                      <p className="textThongTin2">Quận</p>
                    </div>
                    <div className="thongTinChung-item">
                      <img className="iconThongTin" src={anhMap} />
                      <p className="textThongTin2">Địa chỉ chi tiết</p>
                    </div>
                  </div>
                  <div className="thongTinhChung-right">
                    <div className="thongTinhChung-right-left">
                      <p className="gia">4.5 triệu/tháng</p>
                    </div>
                    <div className="thongTinhChung-right-right">
                      <button className="btn btn-primary">Xem chi tiết</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line-cach"></div>
            </div>

            <div className="content-danh-sach">
              <div className="content-danh-sach-left">
                <img className="anhPhong" src={anhPhong} />
              </div>
              <div className="content-danh-sach-right">
                <p className="soPhong">Số phòng 9</p>
                <div className="thongTinChung">
                  <div className="thongTinChung-left">
                    <div className="thongTinChung-item">
                      <img className="iconThongTin" src={anhLoaiPhong} />
                      <p className="textThongTin2">Phòng cho thuê</p>
                    </div>
                    <div className="thongTinChung-item2">
                      <img className="iconThongTin" src={anhGioTinh} />
                      <p className="textThongTin2">Nam</p>
                    </div>
                    <div className="thongTinChung-item2">
                      <img className="iconThongTin" src={anhSao} />
                      <p className="textThongTin2">Quận</p>
                    </div>
                    <div className="thongTinChung-item">
                      <img className="iconThongTin" src={anhMap} />
                      <p className="textThongTin2">Địa chỉ chi tiết</p>
                    </div>
                  </div>
                  <div className="thongTinhChung-right">
                    <div className="thongTinhChung-right-left">
                      <p className="gia">4.5 triệu/tháng</p>
                    </div>
                    <div className="thongTinhChung-right-right">
                      <button className="btn btn-primary">Xem chi tiết</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line-cach"></div>
            </div>

            <div className="content-danh-sach">
              <div className="content-danh-sach-left">
                <img className="anhPhong" src={anhPhong} />
              </div>
              <div className="content-danh-sach-right">
                <p className="soPhong">Số phòng 9</p>
                <div className="thongTinChung">
                  <div className="thongTinChung-left">
                    <div className="thongTinChung-item">
                      <img className="iconThongTin" src={anhLoaiPhong} />
                      <p className="textThongTin2">Phòng cho thuê</p>
                    </div>
                    <div className="thongTinChung-item2">
                      <img className="iconThongTin" src={anhGioTinh} />
                      <p className="textThongTin2">Nam</p>
                    </div>
                    <div className="thongTinChung-item2">
                      <img className="iconThongTin" src={anhSao} />
                      <p className="textThongTin2">Quận</p>
                    </div>
                    <div className="thongTinChung-item">
                      <img className="iconThongTin" src={anhMap} />
                      <p className="textThongTin2">Địa chỉ chi tiết</p>
                    </div>
                  </div>
                  <div className="thongTinhChung-right">
                    <div className="thongTinhChung-right-left">
                      <p className="gia">4.5 triệu/tháng</p>
                    </div>
                    <div className="thongTinhChung-right-right">
                      <button className="btn btn-primary">Xem chi tiết</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
                    
        </div>
                  
      </div>
    </>
  );
};

export default ChiTietPhongTro;
