import React from "react";

interface NavItemProps {
  children: React.ReactNode;
  active?: boolean;
}

const NavItem=({children,active = false,}: NavItemProps)=> {
  return (
    <a
      href="#"
      className={
        "px-3 py-2 rounded-md text-sm font-medium " +
        (active
          ? "text-primary border-b-2 border-primary"
          : "text-gray-600 hover:text-gray-800")
      }
    >
      {children}
    </a>
  );
}

export default NavItem;