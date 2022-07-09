import Image from "next/image";
import Typography from "../../../../common/Typography/Typography";
import HeaderTitle from "../../../HeaderTitle/HeaderTitle";
import { Card, CardDesc, CardImg, CardTitle } from "./managementCardStyle";

const ManagementsCard = ({ src, title, desc }) => {
  return (
    <Card>
      <CardImg>
        <Image src={src} alt={title} layout="fixed" />
      </CardImg>
      <CardTitle>
        <HeaderTitle size="18px">{title}</HeaderTitle>
      </CardTitle>
      <CardDesc>
        <Typography textAlign="center" size="14px">
          {desc}
        </Typography>
      </CardDesc>
    </Card>
  );
};
export default ManagementsCard;
