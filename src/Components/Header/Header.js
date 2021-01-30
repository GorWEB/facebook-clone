import React, { useState,} from 'react'
import './Header.css'
import logo from '../../Images/fbLogo.png'
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from '@material-ui/core';
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ForumIcon from "@material-ui/icons/Forum";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import { switchTheme } from '../../themeReducer';

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    className={props.theme === "dark" ? "menu_dark" : ""}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "silver",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: "#f7f7f7",
      },
    },
  },
}))(MenuItem);



function Header(props) {
  const user = props.user
    ? props.user
    : JSON.parse(localStorage.getItem("user"));
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleExit=()=>{
      localStorage.clear()
      window.location.reload(false);
    }
    const handleClose = () => {
      setAnchorEl(null);
    };
    const switchThemeLS=(theme)=>{
      props.switchTheme(theme)
      localStorage.setItem('theme',theme)
    }
    return (
      <div className={`header ${props.theme === "dark" ? "header_dark" : ""}`}>
        <div className="header__left">
          <img alt='leftLogo' className="header__leftLogo" src={logo} />
          <div
            className={`header__leftSearch ${
              props.theme === "dark" ? "header__leftSearch_dark" : ""
            }`}
          >
            <SearchIcon
              className={`header__leftSearchIcon ${
                props.theme === "dark" ? "leftSearchIcon_dark" : ""
              }`}
            />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header__center">
          <div
            className={`header__option header__option__active ${
              props.theme === "dark" ? "header__option_dark" : ""
            }`}
          >
            <HomeIcon fontSize="large" />
          </div>
          <div
            className={`header__option ${
              props.theme === "dark" ? "header__option_dark" : ""
            }`}
          >
            <FlagIcon fontSize="large" />
          </div>
          <div
            className={`header__option ${
              props.theme === "dark" ? "header__option_dark" : ""
            }`}
          >
            <SubscriptionsOutlinedIcon fontSize="large" />
          </div>
          <div
            className={`header__option ${
              props.theme === "dark" ? "header__option_dark" : ""
            }`}
          >
            <StorefrontOutlinedIcon fontSize="large" />
          </div>
          <div
            className={`header__option ${
              props.theme === "dark" ? "header__option_dark" : ""
            }`}
          >
            <SupervisedUserCircleIcon fontSize="large" />
          </div>
        </div>
        <div
          className={`header__right ${
            props.theme === "dark" ? "header_right_dark" : ""
          }`}
        >
          <div className="header__info">
            <Avatar src={user.photoURL} />
            <h4 className={`${props.theme === "dark" ? "userName_dark" : ""}`}>
              {user.displayName}
            </h4>
          </div>

          <IconButton
            className={`${props.theme === "dark" ? "iconButton_dark" : ""}`}
          >
            <AddIcon />
          </IconButton>
          <IconButton
            className={`${props.theme === "dark" ? "iconButton_dark" : ""}`}
          >
            <ForumIcon />
          </IconButton>
          <IconButton
            className={`${props.theme === "dark" ? "iconButton_dark" : ""}`}
          >
            <NotificationsActiveIcon />
          </IconButton>
          <div>
            <IconButton
              onClick={handleClick}
              className={`${props.theme === "dark" ? "iconButton_dark" : ""}`}
            >
              <ExpandMoreIcon />
            </IconButton>
            <div >
              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <StyledMenuItem
                  onClick={() =>
                    props.theme === "dark"
                      ? switchThemeLS("light")
                      : switchThemeLS("dark")
                  }
                >
                  <ListItemIcon>
                    <NightsStayIcon
                      className={props.theme === "dark" ? "icon_dark" : ""}
                      fontSize="small"
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      props.theme === "dark" ? "Light mode" : "Dark mode"
                    }
                  />
                </StyledMenuItem>
                <StyledMenuItem onClick={handleExit}>
                  <ListItemIcon>
                    <ExitToAppIcon
                      className={props.theme === "dark" ? "icon_dark" : ""}
                      fontSize="small"
                    />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </StyledMenuItem>
              </StyledMenu>
            </div>
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    user: state.reducer.user,
    theme:state.themeReducer.theme
  };
};
export default connect(mapStateToProps, {switchTheme})(Header);