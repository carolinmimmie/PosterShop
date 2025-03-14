import { IoCloseOutline } from "react-icons/io5";
import { MenuItems } from "./MenuItems";

interface IHamburgerModal {
  closeModal: () => void;
}

export const HamburgerModal = ({ closeModal }: IHamburgerModal) => {
  return (
    <div className="hamburger-modal">
      <div className="hamburger-modal__close-icon" onClick={closeModal}>
        <IoCloseOutline />
      </div>
      <div className="hamburger-modal__menu-items" onClick={closeModal}>
        <MenuItems />
      </div>
    </div>
  );
};
