import styled from "styled-components";

const Typography = ({ children, size, color, weight, textAlign }) => {
  return (
    <Text size={size} color={color} weight={weight} textAlign={textAlign}>
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
`;

export default Typography;
