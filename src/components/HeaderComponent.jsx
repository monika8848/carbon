import React from "react";
import {
  Search20,
  Notification20,
  AppSwitcher20,
  Menu20,
} from "@carbon/icons-react/lib";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenuButton,
  TextInput,
  Content,
  Button,
} from "carbon-components-react";

const whiteIconStyle = { fill: "#fff" };
const HeaderComponent = () => (
  <>
    <Header aria-label="IBM Platform Name">
      <HeaderMenuButton
        aria-label="Open menu"
        onClick={() => {}}
        renderIcon={Menu20} // Make sure this is correctly imported
      />
      <HeaderName href="#" prefix="">
        Menu
      </HeaderName>
      <HeaderNavigation aria-label="IBM [Platform]">
        <HeaderMenuItem href="#">Home</HeaderMenuItem>
        <HeaderMenuItem href="#">About</HeaderMenuItem>
        <HeaderMenuItem href="#">Contact</HeaderMenuItem>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <Button
          renderIcon={Search20}
          iconDescription="Search"
          kind="ghost"
          tooltipAlignment="center"
          tooltipPosition="bottom"
          style={whiteIconStyle}
        />
        <Button
          renderIcon={Notification20}
          iconDescription="Notifications"
          kind="ghost"
          tooltipAlignment="center"
          tooltipPosition="bottom"
          style={whiteIconStyle}
          onClick={() => {}}
        />
        <Button
          renderIcon={AppSwitcher20}
          iconDescription="App Switcher"
          kind="ghost"
          tooltipAlignment="center"
          tooltipPosition="bottom"
          style={whiteIconStyle}
          onClick={() => {}}
        />
      </HeaderGlobalBar>
    </Header>
  </>
);

export default HeaderComponent;
