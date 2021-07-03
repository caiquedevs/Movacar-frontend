import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  padding: 42px 25px 0px 25px;

  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #c2c1c3;

  overflow-y: scroll;
`;

export const FilterList = styled.ul`
  margin-bottom: 20px;

  display: flex;
  gap: 15px;

  li {
    width: auto;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`;

export const ItemList = styled.li`
  width: 100%;
  padding: 15px 100px;
  margin-bottom: 7px;

  display: grid;
  grid-template-columns: 100px 1fr 1fr auto;

  border-radius: 3px;
  background-color: ${colors.dark};
  cursor: pointer;

  &:hover button:nth-child(6) {
    color: ${colors.white};
  }

  &:hover span {
    color: ${colors.white};
  }

  &:hover span.status {
    color: ${colors.orange};
  }

  span {
    color: #6e6d6e;
    transition: 0.5s color;
  }

  span + span {
    padding-left: 20px;
  }

  span.status {
    font-size: 14px;
  }

  span.date {
    text-align: right;
  }
`;

export const BtnDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: absolute;
  top: 15px;
  left: 20px;

  color: #6e6d6e;
  border: none;
  background-color: transparent;
  transition: 1s color;

  &:hover {
    color: red;
  }
`;

export const BtnToogle = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  position: absolute;
  top: 14px;
  right: 20px;

  color: #6e6d6e;
  border: none;
  background-color: transparent;
  transition: 1s color;
`;
