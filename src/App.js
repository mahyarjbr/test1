import React from 'react'
import Header from './containers/header/Header';
import Main from './containers/main/Main';
import { faStar ,faFile,faBookmark,faSearch,faUserGroup,faUserCheck } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
   
  } from "react-router-dom";
import Search from './components/Search';
import Ticket from './components/Ticket';
import Agents from './components/Agents';
import Profile from './components/Profile';
import SavedHouse from './components/SavedHouse';
import RecentSearch from './components/RecentSearch';

const App = () => {
    const routes = [
        {
          path: "/",
          exact: true,
          sidebar: "جستجو",
          main: () => <Search />,
          icon:faSearch,
          classname:"header_item"
        },
        {
          path: "/ticket",
          sidebar: "آگهی های من",
          main: () => <Ticket />,
          icon:faFile,
          classname:"header_item"
        },
        {
          path: "/agents",
          sidebar: "نماینده ها",
          main: () => <Agents />,
          icon:faUserGroup,
          classname:"header_item"
        },
        {
            path: "/profile",
            sidebar: "پروفایل",
            main: () => <Profile />,
            icon:faUserCheck,
            classname:"header_item"
          }, {
            path: "/saved-house",
            sidebar: "ملک های ذخیره شده",
            main: () => <SavedHouse />,
            icon:faBookmark,
            classname:"header_item hide"
          }, {
            path: "/recent-search",
            sidebar: "جستجو های اخیر",
            main: () => <RecentSearch />,
            icon:faSearch,
            classname:"header_item hide"
          }]
   
    return (
        <Router>
        <div className='app'>
            <div className='container'>
                <div className='wrapper'>
                    <Header routes={routes} />
                    <Main  routes={routes} />

                </div>


            </div>

        </div>
        </Router>
    )
}

export default App