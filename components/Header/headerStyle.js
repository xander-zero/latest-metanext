import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .img-container {
    position: relative;
    width: 100%;
  }
  .header-desc {
    width: 75%;
  }
  @media (max-width: 991px) {
    .order-fst {
      order: 1;
    }
    .order-snd {
      order: 2;
    }
    .text-container {
      text-align: center;
    }
    .header-desc {
      width: 100%;
    }
    .button-container {
      border-radius: 30px;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;
  height: 100%;
  @media (max-width: 991px) {
    width: 100%;
    display: block;
    text-align: center;
    margin-top: 40px;
  }
`;

export const WrapperCircle = styled.div`
  padding-left: 35px;
`;

export const WrapperImg = styled.div`
  display: flex;
  border-radius: 50px;
  span {
    border-radius: 50px;
    border-top-left-radius: 0;
    border: 3px solid #ffffff70 !important;
  }
  @media (max-width: 1400px) {
  }
`;

export const WrapperImg2 = styled.div`
  display: flex;
  span {
    border-radius: 50px;
    border-bottom-right-radius: 0;
    border: 3px solid #ffffff70 !important;
  }
`;
