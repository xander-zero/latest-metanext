import { ListServiceStyle } from "./listServiceStyle";
import ServiceCard from "./ServiceCard/ServiceCard";
import account from "../../../public/assets/images/account.png";
import manage from "../../../public/assets/images/manage.png";
import crm from "../../../public/assets/images/crm.png";
import provider from "../../../public/assets/images/provider.png";
import shop from "../../../public/assets/images/shop.png";
import chat from "../../../public/assets/images/chat.png";

const ListService = () => {
  return (
    <ListServiceStyle>
      <ServiceCard
        title="سیستم حسابداری"
        desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است"
        src={account}
      />
      <ServiceCard
        title="پنل مدیریت یکپارچه"
        desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است"
        src={manage}
      />
      <ServiceCard
        title="بخش CRM متانکست"
        desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است"
        src={crm}
      />
      <ServiceCard
        title="پنل تأمین کننده"
        desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است"
        src={provider}
      />
      <ServiceCard
        title="فروشگاه اینترنتی"
        desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است"
        src={shop}
      />
      <ServiceCard
        title="سامانه چت آنلاین و تیکت"
        desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است"
        src={chat}
      />
    </ListServiceStyle>
  );
};
export default ListService;
