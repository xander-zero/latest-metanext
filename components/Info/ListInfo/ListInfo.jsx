import InfoCard from "./InfoCard/InfoCard";
import { ListInfoStyle } from "./listInfoStyle";
import code from "../../../public/assets/images/code.png";
import clock from "../../../public/assets/images/clock.png";
import users from "../../../public/assets/images/users.png";
const ListInfo = ({ languageData }) => {
  return (
    <ListInfoStyle>
      <InfoCard
        title="+۱,۰۰۰,۰۰۰"
        desc={languageData.happy_client}
        src={code}
      />
      <InfoCard title="+۱۵۰,۰۰۰" desc={languageData.project_done} src={clock} />
      <InfoCard title="+۵۰" desc={languageData.win_awar} src={users} />
    </ListInfoStyle>
  );
};

export default ListInfo;
