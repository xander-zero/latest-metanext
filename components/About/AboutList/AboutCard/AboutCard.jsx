import Typography from "../../../../common/Typography/Typography";
import { CardTitle, CardWrapper } from "./aboutCardStyle";

const Card = ({ title, desc }) => {
  return (
    <CardWrapper className="mb-4">
      <CardTitle>
        <Typography
          size="14px"
          weight="bold"
          color="#053EFF"
          className="mb-md-2"
        >
          {title}
        </Typography>
      </CardTitle>
      <Typography size="14px" color="#000">
        {desc}
      </Typography>
    </CardWrapper>
  );
};
export default Card;
