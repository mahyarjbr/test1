import React from 'react'
import Header from './containers/header/Header';
import Main from './containers/main/Main';
import { faStar ,faFile,faBookmark,faSearch,faUserGroup,faUserCheck } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
   
  } from "react-router-dom";

const App = () => {
    const routes = [
        {
          path: "/",
          exact: true,
          sidebar: "جستجو",
          main: () => <h2>جستجو</h2>,
          icon:faSearch
        },
        {
          path: "/ticket",
          sidebar: "آگهی های من",
          main: () => <h2>صفحه مربوط به آگهی های من</h2>,
          icon:faFile
        },
        {
          path: "/agents",
          sidebar: "نماینده ها",
          main: () => <h2>صفحه مربوط به نماینده ها</h2>,
          icon:faUserGroup
        },
        {
            path: "/profile",
            sidebar: "پروفایل",
            main: () => <h2>صفحه مربوط به پروفایل </h2>,
            icon:faUserCheck
          }, {
            path: "/saved-house",
            sidebar: "ملک های ذخیره شده",
            main: () => <h2>صفحه مربوط به ملک ها ذخیره شده</h2>,
            icon:faBookmark
          }, {
            path: "/recent-search",
            sidebar: "جستجو های اخیر",
            main: () => <h2>صفحه مربوط به جستجو های اخیر</h2>,
            icon:faSearch
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