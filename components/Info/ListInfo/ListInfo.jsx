import InfoCard from "./InfoCard/InfoCard";
import { ListInfoStyle } from "./listInfoStyle";
import code from "../../../public/assets/images/code.png";
import clock from "../../../public/assets/images/clock.png";
import users from "../../../public/assets/images/users.png";
const ListInfo = () => {
  return (
    <ListInfoStyle>
      <InfoCard title="+۱,۰۰۰,۰۰۰" desc="تعداد خط کد" src={code} />
      <InfoCard title="+۱۵۰,۰۰۰" desc="تعداد ساعت های کار شده" src={clock} />
      <InfoCard title="+۵۰" desc="تعداد افراد" src={users} />
    </ListInfoStyle>
  );
};

export default ListInfo;
