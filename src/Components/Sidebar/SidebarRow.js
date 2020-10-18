import React from 'react'
import { Avatar } from "@material-ui/core";
import './SidebarRow.css'
import switchTheme from '../../themeReducer'
import { connect } from 'react-redux';

function SidebarRow({src,Icon,title,theme}) {
    return (
      <div
        className={`sidebarRow ${theme === "dark" ? "sidebarRow__dark" : ""}`}
      >
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        <h4>{title}</h4>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    theme: state.themeReducer.theme,
  };
};
export default connect(mapStateToProps, { switchTheme })(SidebarRow);