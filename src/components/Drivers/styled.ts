import styled from 'styled-components';
import colors from '../../styles/colors';

export const Aside = styled.aside`
  width: 100%;
  max-width: 364px;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  padding: 42px 25px 0px 25px;

  background-color: ${colors.dark};
  overflow-y: scroll;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemList = styled.li`
  width: 100%;
  padding: 15px 19px;
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;

  border-radius: 3px;
  background-color: ${colors.light};

  small {
    padding-bottom: 6px;

    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: #6e6d6e;
  }

  strong {
    width: max-content;
    padding-left: 16px;
    padding-bottom: 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #6e6d6e;

    &:before {
      content: '';
      width: 9px;
      height: 9px;

      position: absolute;
      left: 0px;
      background-color: ${colors.orange};
      border-radius: 50%;
    }
  }

  span {
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: #6e6d6e;
  }
`;
