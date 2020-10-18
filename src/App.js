import React from 'react';
import './App.css';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Sidebar from'./Components/Sidebar/Sidebar';
import Widgets from './Components/Widgets/Widgets';
import {connect } from 'react-redux'


function App(props) {
  return (
        <div className="app">
          {!props.user && !localStorage.getItem("user") ? (
            <Login />
          ) : (
            <>
              <Header />
              <div
                className={`app__body ${props.theme==="dark" ? "body_dark" : ""}`}
              >
                <Sidebar />
                <Feed />
                <Widgets />
              </div>
            </>
          )}
        </div>
  );
}
const mapStateToProps=(state)=>{
  return {
    user: state.reducer.user,
    theme:state.themeReducer.theme
  };
}
export default connect(mapStateToProps,null)(App);