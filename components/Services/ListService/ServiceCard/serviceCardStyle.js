import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1.5rem 0;
  box-shadow: 0px 7px 25px rgba(5, 62, 255, 0.08);
  padding: 27px;
  border-radius: 10px;
  .Rectangle {
    position: absolute;
    bottom: 8px;
    height: 9px;
    span {
    }
  }
`;
export const CardImg = styled.div``;

export const CardTitle = styled.div`
  margin: 0.5rem 0;
`;
export const CardDesc = styled.div`
  display: flex;
  justify-content: center;
  p {
    text-align: justify;
    text-align-last: center;
  }
`;
