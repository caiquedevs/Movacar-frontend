import { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionsDriver from '../../store/modules/drivers/actions';

import { Aside, List, ItemList } from './styled';
import IDriver from '../../interfaces/driver';

interface IPropsPage {}

export default function AsideComponent(props: IPropsPage): ReactElement {
  const drivers = useSelector((state: any) => state.driverReducer.drivers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsDriver.fetchDriverRequest(false));
  }, [dispatch]);

  return (
    <Aside>
      <h1>15 Motoristas</h1>
      <List>
        {drivers.map((driver: IDriver, index: number) => (
          <ItemList key={index}>
            <small>Motorista</small>
            <strong>{driver.name}</strong>
            <span>{driver.contact}</span>
          </ItemList>
        ))}
      </List>
    </Aside>
  );
}
