import Image from "next/image";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import { InfoStyle, WrapperTitle } from "./infoStyle";
import point from "../../public/assets/images/point.png";
import Typography from "../../common/Typography/Typography";
import ListInfo from "./ListInfo/ListInfo";

const Info = () => {
  return (
    <InfoStyle>
      <WrapperTitle>
        <Image src={point} alt="quote" layout="fixed" />
        <HeaderTitle size="24px">
          متانکست بستری برای رشد کسب و کار شما
        </HeaderTitle>
        <div className="my-3">
          <Typography size="15px">
            کار ما حمایت از هرگونه اقدام در راستای یکپارچه سازی سیستم‌های مرتبط
            با کسب و کار است!
          </Typography>
        </div>
      </WrapperTitle>
      <ListInfo />
    </InfoStyle>
  );
};
export default Info;
