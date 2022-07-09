import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);
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
`;

export const WrapperCircle = styled.div``;

export const WrapperImg = styled.div`
  display: flex;
  position: absolute;
  left: 30px;
  top: 200px;
  border-radius: 50px;
  span {
    border-radius: 50px;
  }
`;

export const WrapperImg2 = styled.div`
  display: flex;
  position: absolute;
  right: 30px;
  bottom: 200px;
  border-radius: 50px;
  span {
    border-radius: 50px;
  }
`;
