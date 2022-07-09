import Image from "next/image";
import Typography from "../../../../common/Typography/Typography";

import { Card, CardDesc, CardImg, CardTitle } from "./serviceCardStyle";

const ServiceCard = ({ title, src, desc }) => {
  return (
    <Card>
      <CardImg>
        <Image src={src} alt={title} layout="fixed" />
      </CardImg>
      <CardTitle>
        <Typography size="15px" weight="bold" color="#000">
          {title}
        </Typography>
      </CardTitle>
      <CardDesc color="#757A86">
        <Typography size="14px">{desc}</Typography>
      </CardDesc>
    </Card>
  );
};
export default ServiceCard;
