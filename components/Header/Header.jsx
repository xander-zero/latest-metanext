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
import { useSelector } from "react-redux";

const Header = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  return (
    <div className="container">
      <Wrapper>
        <Right>
          <Image src={quote} alt="quote" layout="fixed" />
          <HeaderTitle size="24px">{languageData.title_header}</HeaderTitle>
          <WrapperText width="75%">
            <Typography>{languageData.desc_header}</Typography>
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
