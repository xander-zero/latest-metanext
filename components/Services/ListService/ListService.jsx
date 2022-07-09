import { ListServiceStyle } from "./listServiceStyle";
import ServiceCard from "./ServiceCard/ServiceCard";
import account from "../../../public/assets/images/account.png";
import manage from "../../../public/assets/images/manage.png";
import crm from "../../../public/assets/images/crm.png";
import provider from "../../../public/assets/images/provider.png";
import shop from "../../../public/assets/images/shop.png";
import chat from "../../../public/assets/images/chat.png";
import BluePlayer from "../../../public/assets/images/BluePlayer.png";
import Rectangle from "../../../public/assets/images/Rectangle.png";
import useWindowSize from "../../../hooks/useWindowSize";
const ListService = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width > 991 ? (
        <ListServiceStyle>
          <ServiceCard
            title="سیستم حسابداری"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است"
            src={account}
            player={BluePlayer}
            Rectangle={Rectangle}
          />
          <ServiceCard
            title="پنل مدیریت یکپارچه"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است"
            src={manage}
            player={BluePlayer}
            Rectangle={Rectangle}
          />
          <ServiceCard
            title="بخش CRM متانکست"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است"
            src={crm}
            player={BluePlayer}
            Rectangle={Rectangle}
          />
          <ServiceCard
            title="پنل تأمین کننده"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است"
            src={provider}
            player={BluePlayer}
            Rectangle={Rectangle}
          />
          <ServiceCard
            title="فروشگاه اینترنتی"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است"
            src={shop}
            player={BluePlayer}
            Rectangle={Rectangle}
          />
          <ServiceCard
            title="سامانه چت آنلاین و تیکت"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است"
            src={chat}
            player={BluePlayer}
            Rectangle={Rectangle}
          />
        </ListServiceStyle>
      ) : (
        <div>hello</div>
      )}
    </>
  );
};
export default ListService;
