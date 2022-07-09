import { Fragment } from "react";
import ManagementCard from "./ManagementCard/ManagementCard";
import pack from "../../../public/assets/images/pack.png";
import conversation from "../../../public/assets/images/conversation.png";
import develop from "../../../public/assets/images/develop.png";
import marketing from "../../../public/assets/images/marketing.png";
import support from "../../../public/assets/images/support.png";
import manageHuman from "../../../public/assets/images/manageHuman.png";
import { ManagementListStyle } from "./managementListStyle";
import ManagementsCard from "./ManagementCard/ManagementCard";
const ManagementList = ({ languageData }) => {
  return (
    <Fragment>
      <ManagementListStyle>
        <ManagementsCard
          src={pack}
          title={languageData.service_one_pannel}
          desc={languageData.service_one_pannel_desc}
        />
        <ManagementsCard
          src={conversation}
          title={languageData.service_two_pannel}
          desc={languageData.service_two_pannel_desc}
        />
        <ManagementsCard
          src={develop}
          title={languageData.service_three_pannel}
          desc={languageData.service_three_pannel_desc}
        />
      </ManagementListStyle>
      <ManagementListStyle>
        <ManagementsCard
          src={marketing}
          title={languageData.service_four_pannel}
          desc={languageData.service_four_pannel_desc}
        />
        <ManagementsCard
          src={support}
          title={languageData.service_five_pannel}
          desc={languageData.service_five_pannel_desc}
        />
        <ManagementsCard
          src={manageHuman}
          title={languageData.service_six_pannel}
          desc={languageData.service_six_pannel_desc}
        />
      </ManagementListStyle>
    </Fragment>
  );
};

export default ManagementList;
