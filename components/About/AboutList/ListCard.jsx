import Card from "./AboutCard/AboutCard";
import styled from "styled-components";

const ListCard = () => {
  return (
    <ListCardStyle>
      <div className="row w-100">
        <div className="col-lg-4 p-0">
          <Card
            title="مدیریت"
            desc="ماموریت متا نکست اینست که توسعه کسب و کارها را سرعت بخشد و زمینه تسریع رشد هر کسب و کاری را در هر مکان و زمانی فراهم آورد. برای این منظور متا نکست با ارایه سامانه آنلاین و یکپارچه خود، زمینه رشد و توسعه سریع کسب و کارها را ایجاد می کند."
          />
        </div>
        <div className="col-lg-4 p-0">
          <Card
            title="مدیریت"
            desc="ماموریت متا نکست اینست که توسعه کسب و کارها را سرعت بخشد و زمینه تسریع رشد هر کسب و کاری را در هر مکان و زمانی فراهم آورد. برای این منظور متا نکست با ارایه سامانه آنلاین و یکپارچه خود، زمینه رشد و توسعه سریع کسب و کارها را ایجاد می کند."
          />
        </div>
        <div className="col-lg-4 p-0">
          <Card
            title="مدیریت"
            desc="ماموریت متا نکست اینست که توسعه کسب و کارها را سرعت بخشد و زمینه تسریع رشد هر کسب و کاری را در هر مکان و زمانی فراهم آورد. برای این منظور متا نکست با ارایه سامانه آنلاین و یکپارچه خود، زمینه رشد و توسعه سریع کسب و کارها را ایجاد می کند."
          />
        </div>
      </div>
    </ListCardStyle>
  );
};

const ListCardStyle = styled.div`
  display: flex;
  @media (max-width: 991px) {
    .col-lg-4 {
      display: flex;
      justify-content: center;
    }
  }
`;

export default ListCard;
