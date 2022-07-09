import Image from "next/image";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import { ManagementStyle, WrapperTitle } from "./managementStyle";
import point from "../../public/assets/images/point.png";
import ManagementList from "./ManagementList/ManagementList";

const Management = () => {
  return (
    <div className="container">
      <ManagementStyle>
        <WrapperTitle>
          <Image src={point} alt="point" layout="fixed" />
          <HeaderTitle size="24px">پنل مدیریت</HeaderTitle>
        </WrapperTitle>
        <ManagementList />
      </ManagementStyle>
    </div>
  );
};

export default Management;
