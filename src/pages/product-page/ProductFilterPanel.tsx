import { Button, Menu, MenuItem } from "@mui/material";
import { FC, useState, MouseEvent } from "react";
import { Categories } from "../../common/constants/enums";

interface Props {
  onCategoryFilterChange: (value: string) => void;
}

export const ProductFilterPanel: FC<Props> = ({ onCategoryFilterChange }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeHandler = () => setAnchorEl(null);

  const categorySelectHandler = (value: string) => {
    setAnchorEl(null);
    onCategoryFilterChange(value);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={clickHandler}>
        Filter
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={closeHandler}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}>
        <MenuItem onClick={() => categorySelectHandler(Categories.ALL)}>
          All
        </MenuItem>
        <MenuItem onClick={() => categorySelectHandler(Categories.SHOES)}>
          Shoes
        </MenuItem>
        <MenuItem onClick={() => categorySelectHandler(Categories.OVERSHIRTS)}>
          Overshirts
        </MenuItem>
      </Menu>
    </>
  );
};
