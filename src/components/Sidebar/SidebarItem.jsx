/* eslint-disable react/prop-types */
import { useState } from "react";
import Submenu from "./Submenu";

const SidebarItem = ({ icon, text, submenuItems }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div>
      <button onClick={toggleSubMenu}>
      {icon && <span className="icon">{icon}</span>}
        {text}</button>
      {submenuItems && isSubMenuOpen && <Submenu items={submenuItems} />}
    </div>
  );
};

export default SidebarItem;