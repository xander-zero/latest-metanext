import Image from "next/image";
import Typography from "../../../../common/Typography/Typography";
import { Card, CardFooter, CardImg, CardTitle, Img } from "./commetCardStyle";
import quote from "../../../../public/assets/images/quote-yellow.png";

const CommentCard = ({ src, title, subTitle, desc }) => {
  return (
    <Card>
      <Img>
        <Image src={quote} alt="quote" layout="fixed" />
      </Img>
      <CardImg>
        <Image src={src} alt={title} layout="fixed" />
      </CardImg>
      <CardTitle>
        <Typography size="15px" color="#053EFF">
          {title}
        </Typography>
        <Typography size="13px">{subTitle}</Typography>
      </CardTitle>
      <CardFooter>
        <Typography size="15px">{desc}</Typography>
      </CardFooter>
    </Card>
  );
};
export default CommentCard;
