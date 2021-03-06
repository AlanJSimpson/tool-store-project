import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Link } from "react-router-dom";

/**
 *
 * Display a basic menu
 *
 * @component
 * @props {String} buttonName Define a name to the main buttom of menu
 * @props {Object[]} menuOptions Define a object with property to the options of menu
 * @props {String} menuOption.label Define a label to the menu option
 * @props {String} menuOption.href Define a path to the menu option
 *  */
export default function CustomMenu({ buttonName, menuOptions }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "var(--secondary-color)", padding: 0, fontWeight: "bold" }}
        className='navbar-options'
      >
        {buttonName}
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuOptions.map((menuOption, index) => {
          return (
            <MenuItem key={index} onClick={handleClose}>
              {menuOption.isInternal ? (
                <Link state={menuOption.state} to={menuOption.href}>
                  {menuOption.label}
                </Link>
              ) : (
                <a
                  target={menuOption.target}
                  href={menuOption.href}
                  rel='noreferrer'
                >
                  {menuOption.label}
                </a>
              )}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
