import styled from 'styled-components';
import colors from '../../styles/colors';
import { Link } from 'react-router-dom';

export const NavBar = styled.nav`
  width: 100%;
  max-width: 77px;
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: ${colors.light};
`;

export const NavItem = styled(Link)`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
