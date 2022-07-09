import Image from "next/image";
import { useSelector } from "react-redux";

import ManagementList from "./ManagementList/ManagementList";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

import { ManagementStyle, WrapperTitle } from "./managementStyle";

import point from "../../public/assets/images/point.png";

const Management = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  return (
    <div className="container">
      <ManagementStyle>
        <WrapperTitle>
          <Image src={point} alt="point" layout="fixed" />
          <HeaderTitle size="24px">
            {languageData.title_pannel_management}
          </HeaderTitle>
        </WrapperTitle>
        <ManagementList languageData={languageData} />
      </ManagementStyle>
    </div>
  );
};

export default Management;
