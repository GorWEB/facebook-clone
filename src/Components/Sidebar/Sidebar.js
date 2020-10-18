import React from 'react'
import SidebarRow from './SidebarRow'
import PeopleIcon from "@material-ui/icons/People";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import ChatIcon from "@material-ui/icons/Chat";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import StorefrontIcon from "@material-ui/icons/Storefront";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import './Sidebar.css'
import { connect } from 'react-redux';


function Sidebar(props) {
  const user = props.user
    ? props.user
    : JSON.parse(localStorage.getItem("user"));
    return (
      <div className="sidebar">
        <SidebarRow src={user.photoURL } title={user.displayName } />
        <SidebarRow
          Icon={LocalHospitalIcon}
          title="COVID-19 Information Center"
        />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        <SidebarRow Icon={ExpandMoreIcon} title="Show more" />
      </div>
    );
}


const mapStateToProps = (state) => {
  return {
    user: state.reducer.user,
  };
};
export default connect(mapStateToProps, null)(Sidebar);