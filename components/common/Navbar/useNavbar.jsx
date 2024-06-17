import { useState } from "react";

export default function useNavbar() {
  const [menu, setMenu] = useState(false);

  function openMenu() {
    setMenu(true);
  }

  function closeMenu() {
    setMenu(false);
  }

  return {
    menu: menu,
    openMenu: openMenu,
    closeMenu: closeMenu,
  };
}
