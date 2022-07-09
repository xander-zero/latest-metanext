import styled from "styled-components";

const Typography = ({ children, size, color, weight, textAlign, en }) => {
  return (
    <Text
      size={size}
      color={color}
      weight={weight}
      textAlign={textAlign}
      en={en}
    >
      {children}
    </Text>
  );
};

const Text = styled.p`
  color: ${({ color }) => (color ? color : "#6F6F6F")};
  font-size: ${({ size }) => (size ? size : "14px")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  line-height: 35px;
  text-align: ${({ textAlign }) => textAlign};
  font-family: ${({ en }) => (en ? "sans-serif" : "")};
`;

export default Typography;
