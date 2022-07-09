import Image from "next/image";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import { CommentStyle, WrapperTitle } from "./commentStyle";
import point from "../../public/assets/images/point.png";
import CommentList from "./CommentList/CommentList";

const Comment = () => {
  return (
    <div className="container">
      <CommentStyle>
        <WrapperTitle>
          <Image src={point} alt="point" layout="fixed" />
          <HeaderTitle size="24px">نظرات مشتریان</HeaderTitle>
        </WrapperTitle>
        <CommentList />
      </CommentStyle>
    </div>
  );
};
export default Comment;
