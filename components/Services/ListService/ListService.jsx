import ServiceCard from "./ServiceCard/ServiceCard";

import { ListServiceStyle } from "./listServiceStyle";

import account from "../../../public/assets/images/account.png";
import manage from "../../../public/assets/images/manage.png";
import crm from "../../../public/assets/images/crm.png";
import provider from "../../../public/assets/images/provider.png";
import shop from "../../../public/assets/images/shop.png";
import chat from "../../../public/assets/images/chat.png";

const ListService = ({ languageData }) => {
  return (
    <ListServiceStyle>
      <ServiceCard
        title={languageData.title_account_service}
        desc={languageData.desc_account_service}
        src={account}
      />
      <ServiceCard
        title={languageData.title_all_services}
        desc={languageData.desc_all_services}
        src={manage}
      />
      <ServiceCard
        title={languageData.title_crm_service}
        desc={languageData.desc_crm_service}
        src={crm}
      />
      <ServiceCard
        title="پنل تأمین کننده"
        desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است"
        src={provider}
      />
      <ServiceCard
        title={languageData.title_shop_service}
        desc={languageData.desc_shop_service}
        src={shop}
      />
      <ServiceCard
        title={languageData.title_mangeContent_service}
        desc={languageData.desc_manageContent_service}
        src={chat}
      />
    </ListServiceStyle>
  );
};
export default ListService;
