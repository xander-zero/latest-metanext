import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

export const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  border-left: 1px dashed ${({ theme }) => theme.color_primary};
  border-right: 1px dashed ${({ theme }) => theme.color_primary};

  &:nth-child(4) {
    border: none;
  }
  &:nth-child(1) {
    border: none;
  }

  a {
    color: #000000;
    font-size: 15px;
  }
  span {
    margin: 0 0.5rem !important;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  align-items: center;
`;
