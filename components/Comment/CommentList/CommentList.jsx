import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Wrapper } from "./commentListStyle";
import CommentCard from "./CommentCard/CommentCard";
import comment from "../../../public/assets/images/comment.png";

const CommentList = ({ languageData }) => {
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
              title={languageData.comment_person_name_1}
              subTitle={languageData.comment_person_job_1}
              desc={languageData.comment_person_desc_2}
            />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
    // </Wrapper>
  );
};

export default CommentList;
