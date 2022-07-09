import styled from "styled-components";
import SecurityCard from "./SecurityCard/SecurityCard";
import tik from "../../../public/assets/images/tik.png";

const SecurityList = () => {
  return (
    <SecurityListStyle>
      <SecurityCard
        src={tik}
        title="هوشمندسازی در نگهداری اطلاعات"
        desc="سامانه متانکست برای هوشمندسازی یک کلید یکتا می سازد و فقط هر مشتری به اطلاعات خود دسترسی دارد و هیچ کاربر دیگری به اطلاعات شما دسترسی ندارد."
      />
      <SecurityCard
        src={tik}
        title="هوشمندسازی در نگهداری اطلاعات"
        desc="سامانه متانکست برای هوشمندسازی یک کلید یکتا می سازد و فقط هر مشتری به اطلاعات خود دسترسی دارد و هیچ کاربر دیگری به اطلاعات شما دسترسی ندارد."
      />
      <SecurityCard
        src={tik}
        title="هوشمندسازی در نگهداری اطلاعات"
        desc="سامانه متانکست برای هوشمندسازی یک کلید یکتا می سازد و فقط هر مشتری به اطلاعات خود دسترسی دارد و هیچ کاربر دیگری به اطلاعات شما دسترسی ندارد."
      />
      <SecurityCard
        src={tik}
        title="هوشمندسازی در نگهداری اطلاعات"
        desc="سامانه متانکست برای هوشمندسازی یک کلید یکتا می سازد و فقط هر مشتری به اطلاعات خود دسترسی دارد و هیچ کاربر دیگری به اطلاعات شما دسترسی ندارد."
      />
    </SecurityListStyle>
  );
};

const SecurityListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export default SecurityList;
