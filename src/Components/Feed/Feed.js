import React from 'react'
import './Feed.css'
import StoryList from './StoryList'
import MessageSender from "./MessageSender"
import Post from '../Post/Post'
import { connect } from 'react-redux'

function Feed(props) {
  const user = props.user
    ? props.user
    : JSON.parse(localStorage.getItem("user"));
    return (
      <div className="feed">
        <StoryList />
        <MessageSender image />
        <Post
          profileSrc={user.photoURL}
          postText="Post text"
          image="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.0-9/s960x960/117042020_2599283503670277_2336013943808384023_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=0V93yhwB9XEAX-g2dHd&_nc_ht=scontent.fevn2-1.fna&tp=7&oh=684f7f80e8c9347b403e0b939022a167&oe=5FAA0153"
          userName={user.displayName}
          timestamp={new Date().toUTCString()}
        />
        <Post
          profileSrc={user.photoURL}
          postText="Post text"
          image="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.0-9/s960x960/117042020_2599283503670277_2336013943808384023_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=0V93yhwB9XEAX-g2dHd&_nc_ht=scontent.fevn2-1.fna&tp=7&oh=684f7f80e8c9347b403e0b939022a167&oe=5FAA0153"
          userName={user.displayName}
          timestamp={new Date().toUTCString()}
        />
        <Post
          profileSrc={user.photoURL}
          postText="Post text"
          userName={user.displayName}
          timestamp={new Date().toUTCString()}
        />
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    user: state.reducer.user,
  };
};
export default connect(mapStateToProps, null)(Feed);
