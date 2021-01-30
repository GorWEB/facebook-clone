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
          image="https://scontent.fevn6-1.fna.fbcdn.net/v/t1.0-9/142561113_2745283525736940_8948690310845445948_o.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_ohc=4zsIrdxAA0oAX_0_0h5&_nc_ht=scontent.fevn6-1.fna&oh=a405caf6ec0c82af064346aac2bd6d3d&oe=603ABC7C"
          userName={user.displayName}
          timestamp={new Date().toUTCString()}
        />
        <Post
          profileSrc={user.photoURL}
          postText="Post text"
          image="https://scontent.fevn6-1.fna.fbcdn.net/v/t1.0-9/117042020_2599283503670277_2336013943808384023_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=p8cdFwuMvcYAX9s1w8m&_nc_ht=scontent.fevn6-1.fna&oh=e106aaef31e81953fb97c139e3d7e43f&oe=603A746B"
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
