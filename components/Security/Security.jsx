import Image from "next/image";
import styled from "styled-components";
import Typography from "../../common/Typography/Typography";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

import cardSecurity from "../../public/assets/images/cardSecurity.png";
import securityImg from "../../public/assets/images/sec.png";
import point from "../../public/assets/images/point-white.png";
import SecurityList from "./SecurityList/SecurityList";

const Security = () => {
  return (
    <SecurityStyle image={securityImg}>
      <WrapperTitle>
        <Image src={point} alt="point" layout="fixed" />
        <div className="my-2">
          <HeaderTitle size="24px" color="#fff">
            امنیت اطلاعات
          </HeaderTitle>
        </div>
        <Typography textAlign="center" size="16px" color="#fff">
          حفظ و نگهداری اطلاعات شما در برابر حملات <br />
          سامانه متانکست همواره اطلاعات شما را در سرور اختصاصی خود ذخیره کرده و
          هیچ ارگان و نهادی به آن دسترسی ندارد
        </Typography>
      </WrapperTitle>
      <div className="container">
        <Wrapper>
          <Right>
            <SecurityList />
          </Right>
          <Left>
            <Image src={cardSecurity} alt="cardSecurity" layout="fixed" />
          </Left>
        </Wrapper>
      </div>
    </SecurityStyle>
  );
};

const SecurityStyle = styled.div`
  background: url(${(props) => props.image.src});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  /* height: 80vh; */
  margin: 4rem 0;
  padding: 2rem;
`;

const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

export default Security;
