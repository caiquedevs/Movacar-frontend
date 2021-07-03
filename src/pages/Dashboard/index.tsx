import { Main } from './styled';

import Navbar from '../../components/Navbar';
import Drivers from '../../components/Drivers';
import Travels from '../../components/Travels';

export default function DashBoardPage() {
  return (
    <Main>
      <Navbar />
      <Drivers />
      <Travels />
    </Main>
  );
}
