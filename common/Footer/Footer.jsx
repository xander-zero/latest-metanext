import Image from "next/image";
import { useSelector } from "react-redux";

import Typography from "../Typography/Typography";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";

import { WrapperText } from "../../styles/GlobalStyle";
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

import linkdin from "../../public/assets/images/linkdin.png";
import telegram from "../../public/assets/images/telegram.png";
import instagram from "../../public/assets/images/instagram.png";
import phone from "../../public/assets/images/phone.png";
import location from "../../public/assets/images/location.png";
import email from "../../public/assets/images/email.png";

const Footer = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

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
                {languageData.desc_goal_about}
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
            {languageData.contact_subTitle}
          </Typography>
          <List>
            <ListItem>
              <Typography size="13px">
                {languageData.title_phonenumber_footer}
              </Typography>
              <WrapperIcon>
                <Image src={phone} alt="phone number" layout="fixed" />
                <div className="mx-2">
                  <Typography size="13px" en>
                    051-1234567
                  </Typography>
                </div>
              </WrapperIcon>
            </ListItem>
            <ListItem>
              <Typography size="13px">
                {languageData.address_company}
              </Typography>
              <WrapperIcon>
                <Image src={location} alt="phone number" layout="fixed" />
                <div className="mx-2">
                  <Typography size="13px">
                    {languageData.address_company_desc}
                  </Typography>
                </div>
              </WrapperIcon>
            </ListItem>
            <ListItem>
              <Typography size="13px">
                {languageData.title_email_footer}
              </Typography>
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
