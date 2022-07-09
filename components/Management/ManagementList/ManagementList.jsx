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
const ManagementList = () => {
  return (
    <Fragment>
      <ManagementListStyle>
        <ManagementsCard
          src={pack}
          title="یکپارچگی سیستم"
          desc="متا نکست تمام آنچه برای مدیریت کسب و کار نیاز دارید را در یک سیستم یکپارچه به ارمغان می‌آورد."
        />
        <ManagementsCard
          src={conversation}
          title="مشاوره رایگان"
          desc="تیم مشاوره متا نکست، آماده ارائه خدمات مشاوره‌ای رایگان برای توسعه کسب و کار شماست."
        />
        <ManagementsCard
          src={develop}
          title="توسعه پلتفرمها"
          desc="متا نکست زمینه توسعه کسب و کار شما را فراهم می‌کند."
        />
      </ManagementListStyle>
      <ManagementListStyle>
        <ManagementsCard
          src={marketing}
          title="بازاریابی آنلاین"
          desc="با متا نکست، انواع بازاریابی آنلاین را تجربه کنید."
        />
        <ManagementsCard
          src={support}
          title="پشتیبانی 24 ساعته"
          desc="در ۲۴ ساعت شبانه‌روز کنار شما و آماده خدمات رسانی به شما هستیم"
        />
        <ManagementsCard
          src={manageHuman}
          title="مدیریت منابع انسانی"
          desc="با متا نکست، به بهترین شکل ممکن منابع انسانی که ارزشمندترین دارایی هر سازمان است را مدیریت کنید."
        />
      </ManagementListStyle>
    </Fragment>
  );
};

export default ManagementList;
