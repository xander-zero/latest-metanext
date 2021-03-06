import styled from "styled-components";

const HeaderTitle = ({ size, color, children, weight, className }) => {
  return (
    <Text size={size} color={color} weight={weight} className={className}>
      {children}
    </Text>
  );
};

const Text = styled.h1`
  font-size: ${({ size }) => size};
  color: ${({ color }) => (color ? color : "#053EFF")};
  font-weight: bold;
`;

export default HeaderTitle;
