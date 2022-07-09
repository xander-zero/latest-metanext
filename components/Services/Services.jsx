import Image from "next/image";
import { useSelector } from "react-redux";

import Typography from "../../common/Typography/Typography";
import ListService from "./ListService/ListService";

import { ServiceStyle, WrapperTitle } from "./servicesStyle";

import quote from "../../public/assets/images/quote.png";

const Services = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  return (
    <div className="container mt-5">
      <ServiceStyle>
        <WrapperTitle>
          <Image src={quote} alt="quote" layout="fixed" />
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
