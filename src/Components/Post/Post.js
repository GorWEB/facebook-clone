import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './Post.css'
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { connect } from 'react-redux';

function Post({profileSrc,postText,image,userName,timestamp,theme}) {
    return (
      <div className={`post ${theme === "dark" ? "post_dark" : ""}`}>
        <div className="postTop">
          <Avatar className="postAvatar" src={profileSrc} />
          <div
            className={`postTop__info ${
              theme === "dark" ? "postTop__info_dark" : ""
            }`}
          >
            <h3>{userName}</h3>
            <p>{timestamp}</p>
          </div>
        </div>
        <div className="postBottom">
          <p className={`${theme==="dark"?"postText_dark":""}`}>{postText}</p>
        </div>
        <div className="postImage">{image && <img src={image} />}</div>
        <div className={`post__options ${theme==="dark"?"post__options_dark":""}`}>
          <div
            className={`post__option ${
              theme === "dark" ? "post_option_dark" : ""
            }`}
          >
            <ThumbUpAltOutlinedIcon />
            <p>Like</p>
          </div>
          <div
            className={`post__option ${
              theme === "dark" ? "post_option_dark" : ""
            }`}
          >
            <ChatBubbleOutlineOutlinedIcon />
            <p>Comments</p>
          </div>
          <div
            className={`post__option ${
              theme === "dark" ? "post_option_dark" : ""
            }`}
          >
            <NearMeIcon />
            <p>Share</p>
          </div>
          <div
            className={`post__option ${
              theme === "dark" ? "post_option_dark" : ""
            }`}
          >
            <AccountCircleIcon />
            <ExpandMoreIcon />
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    theme: state.themeReducer.theme,
  };
};
export default connect(mapStateToProps, null)(Post);
