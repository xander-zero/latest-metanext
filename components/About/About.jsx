import Image from "next/image";
import { AboutStyle, Line, Wrapper } from "./aboutStyle";
import aboutTitleImg from "../../public/assets/images/aboutTitleImg.png";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Typography from "../../common/Typography/Typography";
import { WrapperText } from "../../styles/GlobalStyle";
import ListCard from "./AboutList/ListCard";

const About = () => {
  return (
    <div className="wrapper w-100" style={{ background: "#F2F6FF" }}>
      <div className="container pt-5 pb-2">
        <AboutStyle>
          <Wrapper>
            <Image
              src={aboutTitleImg}
              alt="quote"
              layout="fixed"
              className="mb-2"
            />
            <HeaderTitle size="24px" className="mt-2">
              درباره متانکست
            </HeaderTitle>
            <div className="my-3">
              <Typography size="16px" weight="bold" color="#000">
                همیشه یک گام جلوتر از دیگران باشید
              </Typography>
            </div>
            <div className="mb-5">
              <WrapperText width="100%" margin="auto">
                <Typography size="15px" textAlign="center">
                  هدف متا نکست یکپارچه سازی فرایندها، سیستم ها و سرویسهای
                  الکترونیکی مرتبط با کسب و کار می باشد. از آنجا که پراکندگی نرم
                  افزارهای مورد استفاده در کسب و کارها باعث عقب افتادگی و کندی
                  فعالیت می شود، سامانه آنلاین متا نکست با یکپارچه سازی تمامی
                  فرایندها، علاوه بر سرعت و بهبود کارکرد، باعث توسعه سریع و
                  مدیریت یکپارچه کسب و کارهای خرد، متوسط و کلان می شود.
                </Typography>
              </WrapperText>
            </div>
          </Wrapper>
          <div className="mb-5 w-100">
            <Line></Line>
          </div>
          <ListCard />
        </AboutStyle>
      </div>
    </div>
  );
};
export default About;
