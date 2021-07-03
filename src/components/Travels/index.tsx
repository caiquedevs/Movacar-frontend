import { ReactElement, useEffect } from 'react';
import { format } from 'date-fns';
import { FaTrash, FaEllipsisH } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import ITravel from '../../interfaces/travels';
import * as actionsTravel from '../../store/modules/travels/actions';

import {
  Container,
  FilterList,
  List,
  ItemList,
  BtnDelete,
  BtnToogle,
} from './styled';

export default function TravelsComponent(): ReactElement {
  const dispatch = useDispatch();
  const travels = useSelector((state: any) => state.travelReducer.travels);

  useEffect(() => {
    dispatch(actionsTravel.fetchTravelsRequest(null));
  }, [dispatch]);

  const handleClickDelete = () => {
    alert('delete');
  };

  const handleClickShow = () => {
    alert('Mostrar');
  };

  return (
    <Container>
      <h1>{travels.length} Viagens</h1>

      <FilterList>
        <li>Todas Viagens</li>
        <li>Pendente</li>
        <li>Em andamento</li>
        <li>Completada</li>
      </FilterList>

      <List>
        {travels.map((travel: ITravel, index: number) => (
          <ItemList key={index}>
            <BtnDelete type="button" onClick={handleClickDelete}>
              <FaTrash size="15" />
            </BtnDelete>

            <span className="status">{travel.status}</span>
            <span className="description">{travel.description}</span>
            <span className="logradouro">{travel.address}</span>
            <span className="date">{format(new Date(), 'HH:mm')}</span>

            <BtnToogle type="button" onClick={handleClickShow}>
              <FaEllipsisH size="20" />
            </BtnToogle>
          </ItemList>
        ))}
      </List>
    </Container>
  );
}
