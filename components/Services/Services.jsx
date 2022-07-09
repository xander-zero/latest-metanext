import Image from "next/image";
import Typography from "../../common/Typography/Typography";
import { ServiceStyle, WrapperTitle } from "./servicesStyle";
import quote from "../../public/assets/images/quote.png";
import ListService from "./ListService/ListService";

const Services = () => {
  return (
    <div className="container mt-5">
      <ServiceStyle>
        <WrapperTitle>
          <Image src={quote} alt="quote" layout="fixed" />
          <Typography color="#053EFF" weight="bold" size="24px">
            بخش های متانکست
          </Typography>
        </WrapperTitle>
        <ListService />
      </ServiceStyle>
    </div>
  );
};

export default Services;
