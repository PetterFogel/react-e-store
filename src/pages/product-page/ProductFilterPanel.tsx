import { FC, useState, MouseEvent } from "react";
import { Categories } from "../../common/constants/enums";
import { Button, Menu, MenuItem, Stack } from "@mui/material";

interface Props {
  onCategoryFilterChange: (value: string) => void;
  onPriceSortChange: (value: string | null) => void;
}

export const ProductFilterPanel: FC<Props> = ({
  onCategoryFilterChange,
  onPriceSortChange
}) => {
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

  const sortPriceHandler = (value: string | null) => onPriceSortChange(value);

  return (
    <Stack direction={"row"} spacing={1}>
      <Button
        id="basic-button"
        size="small"
        aria-haspopup="true"
        aria-controls={open ? "basic-menu" : undefined}
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
      <Button
        id="basic-button"
        size="small"
        aria-haspopup="true"
        aria-controls={open ? "basic-menu" : undefined}
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
        <MenuItem onClick={() => sortPriceHandler(null)}>Popular</MenuItem>
        <MenuItem onClick={() => sortPriceHandler("ASC")}>
          Lowest price
        </MenuItem>
        <MenuItem onClick={() => sortPriceHandler("DESC")}>
          Highest price
        </MenuItem>
      </Menu>
    </Stack>
  );
};
