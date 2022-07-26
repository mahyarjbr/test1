import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./main.css"
import Search from './../../components/Search';

const Main = ({routes}) => {
  
  
  return (
    <div className='main'>
      
    
       <Routes>
            {routes.map((route, index) => (
             
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.main />}
              />
            ))}
          </Routes>
    </div>
  )
}

export default Main