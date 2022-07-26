import React from 'react'
import Header from './containers/header/Header';
import Main from './containers/main/Main';
import {
    BrowserRouter as Router,
   
  } from "react-router-dom";

const App = () => {
    const routes = [
        {
          path: "/",
          exact: true,
          sidebar: () => <div>home!</div>,
          main: () => <h2>جستجو</h2>
        },
        {
          path: "/ticket",
          sidebar: "آگهی های من",
          main: () => <h2>صفحه مربوط به آگهی های من</h2>
        },
        {
          path: "/agents",
          sidebar: "نماینده ها",
          main: () => <h2>صفحه مربوط به نماینده ها</h2>
        },
        {
            path: "/profile",
            sidebar: "پروفایل",
            main: () => <h2>صفحه مربوط به پروفایل </h2>
          }, {
            path: "/saved-house",
            sidebar: "ملک های ذخیره شده",
            main: () => <h2>صفحه مربوط به ملک ها ذخیره شده</h2>
          }, {
            path: "/recent-search",
            sidebar: "جستجو های اخیر",
            main: () => <h2>صفحه مربوط به جستجو های اخیر</h2>
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