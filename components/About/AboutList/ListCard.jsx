import styled from "styled-components";
import { useSelector } from "react-redux";
import Card from "./AboutCard/AboutCard";

const ListCard = () => {
  const languageSelector = useSelector((state) => state.language);
  const { languageData } = languageSelector;

  return (
    <div className="row w-100">
      <div className="col-lg-4 p-0">
        <Card
          title={languageData.title_goal_about}
          desc={languageData.desc_goal_about}
        />
      </div>
      <div className="col-lg-4 p-0">
        <Card
          title={languageData.title_mention_about}
          desc={languageData.desc_mention_about}
        />
      </div>
      <div className="col-lg-4 p-0">
        <Card
          title={languageData.title_profecy_about}
          desc={languageData.desc_profecy_about}
        />
      </div>
    </div>
  );
};

export default ListCard;
