import { FC } from "react";
import "../../../style/BurgerMenu.css";

interface Props {
  onBurgerMenuOpenClick: () => void;
  value: boolean;
}

export const BurgerMenu: FC<Props> = ({ value, onBurgerMenuOpenClick }) => {
  return (
    <div className="burger-container" onClick={onBurgerMenuOpenClick}>
      <div
        style={{
          transform: value
            ? "rotate(-45deg) translate(-0.3rem, 0.4rem)"
            : "rotate(0deg)",
        }}
      ></div>
      <div
        style={{
          opacity: value ? "0" : "1",
        }}
      ></div>
      <div
        style={{
          transform: value
            ? "rotate(45deg) translate(-0.3rem, -0.4rem)"
            : "rotate(0deg)",
        }}
      ></div>
    </div>
  );
};
