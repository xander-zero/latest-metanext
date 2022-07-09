import Image from "next/image";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Typography from "../../common/Typography/Typography";

import { WrapperText } from "../../styles/GlobalStyle";
import {
  Left,
  Right,
  Wrapper,
  WrapperCircle,
  WrapperImg,
  WrapperImg2,
} from "./headerStyle";
import quote from "../../public/assets/images/quote.png";
import circle from "../../public/assets/images/circle.png";
import headerImg1 from "../../public/assets/images/headerImg1.png";
import headerImg2 from "../../public/assets/images/headerImg2.png";

const Header = () => {
  return (
    <div className="container">
      <Wrapper>
        <Right>
          <Image src={quote} alt="quote" layout="fixed" />
          <HeaderTitle size="24px">با ما به آینده سفر کنید</HeaderTitle>
          <WrapperText width="75%">
            <Typography>
              متا نکست، جامع ترین سیستم یکپارچه مدیریت کسب و کار آنلاین می باشد
              که برای اولین بار در ایران و به منظور مدیریت یکپارچه کسب و کارهای
              کلان آنلاین ساخته شده است.
            </Typography>
          </WrapperText>
        </Right>
        <Left>
          <WrapperCircle>
            <Image src={circle} alt="circle" layout="fixed" />
          </WrapperCircle>
          <WrapperImg>
            <Image src={headerImg1} alt="headerImg1" layout="fixed" />
          </WrapperImg>
          <WrapperImg2>
            <Image src={headerImg2} alt="headerImg2" layout="fixed" />
          </WrapperImg2>
        </Left>
      </Wrapper>
    </div>
  );
};
export default Header;
