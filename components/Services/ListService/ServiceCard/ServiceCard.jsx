import Image from "next/image";
import Typography from "../../../../common/Typography/Typography";

import { Card, CardDesc, CardImg, CardTitle } from "./serviceCardStyle";

const ServiceCard = ({ title, src, desc, player, Rectangle }) => {
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
      <div className="player d-flex">
        <Image src={player} alt={title} layout="fixed" />
        <Typography className="d-flex align-items-center">
          رایگان آموزش ببینید
        </Typography>
      </div>
      <div className="Rectangle">
        <Image src={Rectangle} alt={title} layout="fixed" />
      </div>
    </Card>
  );
};
export default ServiceCard;
