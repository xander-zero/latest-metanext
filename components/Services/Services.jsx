import Image from "next/image";
import { useSelector } from "react-redux";

import Typography from "../../common/Typography/Typography";
<<<<<<< HEAD
import { ServiceStyle, WrapperTitle } from "./servicesStyle";
import aboutTitleImg from "../../public/assets/images/aboutTitleImg.png";
=======
>>>>>>> d5603aabf3359e2344da17016f0542e389dc7e78
import ListService from "./ListService/ListService";
import useWindowSize from "../../hooks/useWindowSize";

import { ServiceStyle, WrapperTitle } from "./servicesStyle";

import quote from "../../public/assets/images/quote.png";

const Services = () => {
<<<<<<< HEAD
  const { width } = useWindowSize();
  console.log(width);
=======
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

>>>>>>> d5603aabf3359e2344da17016f0542e389dc7e78
  return (
    <div className="container mt-5">
      <ServiceStyle>
        <WrapperTitle>
          <Image src={aboutTitleImg} alt="quote" layout="fixed" />
          <Typography color="#053EFF" weight="bold" size="24px">
            {languageData.title_service}
          </Typography>
        </WrapperTitle>
        <ListService languageData={languageData} />
      </ServiceStyle>
    </div>
  );
};

export default Services;
