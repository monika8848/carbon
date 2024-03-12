import React, { useState } from "react";
import { SideNav, SideNavItems, SideNavLink } from "carbon-components-react";
import { Task20, Document20, Team20, Chat20 } from "@carbon/icons-react";
import ProfileForm from "./ProfileForm";
import TableComponent from "./TableComponent";

const DashboardComponent = () => {
  const [activeSection, setActiveSection] = useState("tasks");

  const handleSectionClick = (section) => {
    console.log("Clicked section:", section);
    setActiveSection(section);
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case "Profile":
        return (
          <div>
            <ProfileForm />
          </div>
        );
      case "team":
        return (
          <div>
            <TableComponent />
          </div>
        );
      case "task":
        return <div>Team Activity Content</div>;
      case "Documents":
        return <div>Chat Content</div>;
      default:
        return null;
    }
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideNav
          isFixedNav
          expanded={true}
          isChildOfHeader={false}
          aria-label="Side navigation"
        >
          <SideNavItems>
            <SideNavLink
              isActive={activeSection === "Profile"}
              onClick={() => handleSectionClick("Profile")}
              renderIcon={Task20}
            >
              Profile
            </SideNavLink>
            <SideNavLink
              isActive={activeSection === "team"}
              onClick={() => handleSectionClick("team")}
              renderIcon={Document20}
            >
              Team
            </SideNavLink>
            <SideNavLink
              isActive={activeSection === "task"}
              onClick={() => handleSectionClick("task")}
              renderIcon={Team20}
            >
              Tasks
            </SideNavLink>
            <SideNavLink
              isActive={activeSection === "Documents"}
              onClick={() => handleSectionClick("Documents")}
              renderIcon={Chat20}
            >
              Documents
            </SideNavLink>
          </SideNavItems>
        </SideNav>
        <div style={{ marginLeft: "16px", flexGrow: 1 }}>
          {renderSectionContent()}
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
