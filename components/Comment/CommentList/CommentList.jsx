import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Wrapper } from "./commentListStyle";
import CommentCard from "./CommentCard/CommentCard";
import comment from "../../../public/assets/images/comment.png";

const CommentList = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    // <Wrapper>
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      navigation={true}
      breakpoints={{
        "@0.00": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
    >
      <div className="my-5">
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <CommentCard
              src={comment}
              title="علی حسینی"
              subTitle="طراح رابط کاربری"
              desc="متا نکست، جامع ترین سیستم یکپارچه مدیریت کسب و کار می باشد که برای اولین بار در ایران و به منظور مدیریت یکپارچه کسب و کارهای کلان ساخته شده است. این سامانه شامل: فروشگاه "
            />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
    // </Wrapper>
  );
};

export default CommentList;
