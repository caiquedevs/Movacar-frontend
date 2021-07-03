import { ReactElement } from 'react';

import { NavBar, NavItem } from './styled';

export default function MenuComponent(): ReactElement {
  return (
    <NavBar>
      <NavItem to="/">
        <img src="/images/logo.svg" alt="logo" />
      </NavItem>

      <div className="icon-group">
        <NavItem to="/">
          <img src="/images/icons/homeIcon.svg" alt="home" />
        </NavItem>

        <NavItem to="/">
          <img src="/images/icons/driverIcon.svg" alt="driver" />
        </NavItem>

        <NavItem to="/">
          <img src="/images/icons/travelIcon.svg" alt="travel" />
        </NavItem>
      </div>

      <NavItem to="/">
        <img src="/images/icons/logoutIcon.svg" alt="logout" />
      </NavItem>
    </NavBar>
  );
}
