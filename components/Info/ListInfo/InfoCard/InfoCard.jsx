import Image from "next/image";
import Typography from "../../../../common/Typography/Typography";
import { Card, CardImg, Wrapper } from "./infoCardStyle";

const InfoCard = ({ src, title, desc }) => {
  return (
    <Card>
      <CardImg>
        <Image src={src} alt={title} layout="fixed" />
      </CardImg>
      <Wrapper>
        <Typography size="24px" weight="bold" color="#053EFF">
          {title}
        </Typography>
        <Typography size="14px" color="#000">
          {desc}
        </Typography>
      </Wrapper>
    </Card>
  );
};
export default InfoCard;
