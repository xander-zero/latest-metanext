import Image from "next/image";
import { AboutStyle, Line, Wrapper } from "./aboutStyle";
import quote from "../../public/assets/images/quote.png";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Typography from "../../common/Typography/Typography";
import { WrapperText } from "../../styles/GlobalStyle";
import ListCard from "./AboutList/ListCard";

const About = () => {
  return (
    <div className="container">
      <AboutStyle>
        <Wrapper>
          <Image src={quote} alt="quote" layout="fixed" />
          <HeaderTitle size="24px">درباره متانکست</HeaderTitle>
          <div className="my-3">
            <Typography size="16px" weight="bold" color="#000">
              همیشه یک گام جلوتر از دیگران باشید
            </Typography>
          </div>
          <div className="mb-5 mx-auto">
            <WrapperText width="70%" margin="auto">
              <Typography size="15px" textAlign="center">
                هدف متا نکست یکپارچه سازی فرایندها، سیستم ها و سرویسهای
                الکترونیکی مرتبط با کسب و کار می باشد. از آنجا که پراکندگی نرم
                افزارهای مورد استفاده در کسب و کارها باعث عقب افتادگی و کندی
                فعالیت می شود، سامانه آنلاین متا نکست با یکپارچه سازی تمامی
                فرایندها، علاوه بر سرعت و بهبود کارکرد، باعث توسعه سریع و مدیریت
                یکپارچه کسب و کارهای خرد، متوسط و کلان می شود.
              </Typography>
              <div className="my-4">
                <Line></Line>
              </div>
            </WrapperText>
          </div>
        </Wrapper>
        <ListCard />
      </AboutStyle>
    </div>
  );
};
export default About;
