import Image from "next/image";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import Typography from "../Typography/Typography";
import {
  FooterStyle,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  SocilaMedia,
  WrapperIcon,
} from "./footerStyle";
import { WrapperText } from "../../styles/GlobalStyle";
import linkdin from "../../public/assets/images/linkdin.png";
import telegram from "../../public/assets/images/telegram.png";
import instagram from "../../public/assets/images/instagram.png";
import phone from "../../public/assets/images/phone.png";
import location from "../../public/assets/images/location.png";
import email from "../../public/assets/images/email.png";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container d-flex">
        <Right>
          <HeaderTitle size="24px" color="#053EFF">
            لوگو
          </HeaderTitle>
          <div className="my-5">
            <WrapperText width="80%">
              <Typography size="15px" color="#000">
                هدف متا نکست یکپارچه سازی فرایندها، سیستم ها و سرویسهای
                الکترونیکی مرتبط با کسب و کار می باشد. از آنجا که پراکندگی نرم
                افزارهای مورد استفاده در کسب و کارها باعث عقب افتادگی و کندی
                فعالیت می شود، سامانه آنلاین متا نکست با یکپارچه سازی تمامی
                فرایندها، علاوه بر سرعت و بهبود کارکرد، باعث توسعه سریع و مدیریت
                یکپارچه کسب و کارهای خرد، متوسط و کلان می شود.
              </Typography>
            </WrapperText>
          </div>
          <SocilaMedia>
            <Icon>
              <Image src={linkdin} alt="linkdin" />
            </Icon>
            <Icon>
              <Image src={telegram} alt="telegram" />
            </Icon>
            <Icon>
              <Image src={instagram} alt="instagram" />
            </Icon>
          </SocilaMedia>
        </Right>
        <Left>
          <Typography size="16px" color="#053EFF" weight="bold">
            راه های ارتباطی
          </Typography>
          <List>
            <ListItem>
              <Typography size="13px">تلفن تماس</Typography>
              <WrapperIcon>
                <Image src={phone} alt="phone number" layout="fixed" />
                <div className="mx-2">
                  <Typography size="13px">051-1234567</Typography>
                </div>
              </WrapperIcon>
            </ListItem>
            <ListItem>
              <Typography size="13px">آدرس شرکت</Typography>
              <WrapperIcon>
                <Image src={location} alt="phone number" layout="fixed" />
                <div className="mx-2">
                  <Typography size="13px">ایران ،خراسان رضوی ، مشهد</Typography>
                </div>
              </WrapperIcon>
            </ListItem>
            <ListItem>
              <Typography size="13px">آدرس ایمیل</Typography>
              <WrapperIcon>
                <Image src={email} alt="phone number" layout="fixed" />
                <div className="mx-2">
                  <Typography size="13px">‌info@example.com</Typography>
                </div>
              </WrapperIcon>
            </ListItem>
          </List>
        </Left>
      </div>
    </FooterStyle>
  );
};
export default Footer;
