import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin: 0 0;
  p {
    text-align: justify;
  }
  @media (max-width: 991px) {
    p {
      text-align: center;
    }
  }
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  P {
    width: fit-content;
    background-color: #dae4ff;
    padding: 0 0.5rem;
    border-radius: 5px;
  }
`;
