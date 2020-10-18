import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSender.css'
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { connect } from 'react-redux';

function MessageSender(props) {
    const [input,setInput]=useState('')
    const [image,setImage] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        setInput('')
        setImage('')
    }
    const user = props.user
      ? props.user
      : JSON.parse(localStorage.getItem("user"));
    return (
      <div className={`sender ${props.theme === "dark" ? "sender_dark" : ""}`}>
        <div className={`senderTop ${props.theme==="dark"?"senderTop_dark":""}`}>
          <Avatar src={user.photoURL} />
          <form>
            <input
              className={`${props.theme === "dark" ? "input_dark" : ""}`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What's on your mind?"
              type="text"
            />
            <input
              className={`${props.theme === "dark" ? "input_dark" : ""}`}
              onChange={(e) => setImage(e.target.value)}
              value={image}
              placeholder="Image url (Optional)"
              type="text"
            />
            <button
              type="submit"
              style={{ display: "none" }}
              onClick={handleSubmit}
            >
              Hidden
            </button>
          </form>
        </div>
        <div className="senderBottom">
          <div
            className={`sender__option ${
              props.theme === "dark" ? "sender__option_dark" : ""
            }`}
          >
            <VideocamIcon style={{ color: "red" }} />
            <h3>Live video</h3>
          </div>
          <div
            className={`sender__option ${
              props.theme === "dark" ? "sender__option_dark" : ""
            }`}
          >
            <PhotoLibraryIcon style={{ color: "green" }} />
            <h3>Photo/Video</h3>
          </div>
          <div
            className={`sender__option ${
              props.theme === "dark" ? "sender__option_dark" : ""
            }`}
          >
            <InsertEmoticonIcon style={{ color: "yellow" }} />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    user:state.reducer.user,
    theme: state.themeReducer.theme,
  };
};
export default connect(mapStateToProps, null)(MessageSender);