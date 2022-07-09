import Image from "next/image";
import { useSelector } from "react-redux";

import HeaderTitle from "../HeaderTitle/HeaderTitle";
import ListCard from "./AboutList/ListCard";
import Typography from "../../common/Typography/Typography";

import { AboutStyle, Line, Wrapper } from "./aboutStyle";
import { WrapperText } from "../../styles/GlobalStyle";

import quote from "../../public/assets/images/quote.png";

const About = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  return (
    <div className="container">
      <AboutStyle>
        <Wrapper>
          <Image src={quote} alt="quote" layout="fixed" />
          <HeaderTitle size="24px">{languageData.title_about}</HeaderTitle>
          <div className="my-3">
            <Typography size="16px" weight="bold" color="#000">
              {languageData.subTitle_about}
            </Typography>
          </div>
          <div className="mb-5 mx-auto">
            <WrapperText width="70%" margin="auto">
              <Typography size="15px" textAlign="center">
                {languageData.desc_goal_about}
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
