import styled from "styled-components";

const Button = ({ children, bgColor, color, radius, className, width }) => {
  return (
    <Btn
      bgColor={bgColor}
      color={color}
      radius={radius}
      className={className}
      width={width}
    >
      {children}
    </Btn>
  );
};

const Btn = styled.button`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
  color: ${({ color }) => (color ? color : "#000")};
  border-radius: ${({ radius }) => (radius ? "50px" : "10px")};
  box-shadow: 0px 3px 6px rgba(5, 62, 255, 0.2);
  font-size: 15px;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  width: ${({ width }) => width};

  a {
    color: ${({ color }) => color};
  }
`;

export default Button;
