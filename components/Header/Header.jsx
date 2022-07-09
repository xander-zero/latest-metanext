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
import HeaderImg from "../../public/assets/images/HeaderImg.png";
import headerImg1 from "../../public/assets/images/headerImg1.png";
import headerImg2 from "../../public/assets/images/headerImg2.png";
import Button from "../../common/Button/Button";

const Header = () => {
  return (
    <div className="container">
      <Wrapper>
        <div className="row mt-5">
          <div className="col-lg-6 col-md-12 d-flex align-items-center order-snd">
            <div className="text-container">
              <div className="d-none d-lg-block">
                <Image src={quote} alt="quote" layout="fixed" />
              </div>
              <HeaderTitle size="24px" className="mb-2">
                با ما به آینده سفر کنید
              </HeaderTitle>
              <WrapperText className="header-desc">
                <Typography className="mb-3">
                  متا نکست، جامع ترین سیستم یکپارچه مدیریت کسب و کار آنلاین می
                  باشد که برای اولین بار در ایران و به منظور مدیریت یکپارچه کسب
                  و کارهای کلان آنلاین ساخته شده است.
                </Typography>
                <div className="d-xl-none d-lg-none d-flex w-100 justify-content-center mb-3">
                  <Button
                    className="button-container"
                    bgColor="#053EFF"
                    color="#fff"
                  >
                    دریافت مشاوره
                  </Button>
                </div>
              </WrapperText>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-fst">
            <div className="img-container">
              <WrapperCircle>
                <Image src={HeaderImg} alt="circle" layout="intrinsic" />
              </WrapperCircle>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default Header;
